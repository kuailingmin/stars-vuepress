# re-render原理及优化

对于函数组件的 re-render，大致分为以下三种情况：
* 组件本身使用 useState 或 useReducer 更新，引起的 re-render
* 父组件更新引起的 re-render
* 组件本身使用了 useContext，context 更新引起的 re-render


## 1. 使用 useState 或 useReducer 更新，引起的 re-render

### 常规使用

以计数组件为例，如下每次点击 add，都会打印 'counter render'，表示引起了 re-render

```JS
const Counter = () => {
  console.log('counter render');
  const [count, addCount ] = useState(0);
  return (
    <div className="counter">
      <div className="counter-num">{count}</div>
      <button onClick={() => {addCount(count + 1)}}>add</button>
    </div>
  )
}
```


### immutation state

下面我们将上面计数组件中的 state 值改成引用类型试试，如下，发现点击并不会引起 re-render

```JS
const Counter = () => {
  console.log("counter render");
  const [count, addCount] = useState({ num: 0, time: Date.now() });
  const clickHandler = () => {
    count.num++;
    count.time = Date.now();
    addCount(count);
  };
  return (
    <div className="counter">
      <div className="counter-num">
        {count.num}, {count.time}
      </div>
      <button onClick={clickHandler}>add</button>
    </div>
  );
};
```

真实的原因在于，更新 state 的时候，会有一个新老 state 的比较，用的是 Object.is 进行比较，如果为 true 则直接返回不更新，源码如下（Object.is 会先判断 Object.is 是否支持，如果不支持则重新实现,eagerState 就是 oldState）

```JS
if (objectIs(eagerState, currentState)) {
  return;
}
```
所以更新 state 时候要注意，state 为不可变数据，每次更新都需要一个新值才会有效

### 强制更新
相比于类组件有个 forceUpdate 方法，函数组件是没有该方法的，但是其实也可以自己写一个，如下，由于 Object.is({}, {}) 总是 false，所以总能引起更新
```JS
const [, forceUpdate] = useState({});
forceUpdate({})
```
说完 useState 的更新，其实 useReducer 就不用说了，因为源码里面 useState 的更新其实调用的就是 useReducer 的更新，如下：
```JS
// 源码片段
function updateState(initialState) {
  return updateReducer(basicStateReducer);
}
```


## 2. 父组件更新引起子组件的re-render
### 常规使用

现在稍微改造上面计数的组件，添加一个子组件 Hello，如下点击会发现，每次都会输出 "hello render"，也就是说，每次更新都引起了 Hello 的 re-render，但是其实 Hello 组件的属性根本就没有改变

```JS
const Hello = ({ name }) => {
  console.log("hello render");
  return<div>hello {name}</div>;
};

const App = () => {
  console.log("app render");
  const [count, addCount] = useState(0);
  return (
    <div className="app">
      <Hello name="react" />
      <div className="counter-num">{count}</div>
      <button
        onClick={() => {
          addCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
};
```
对于这种不必要的 re-render，我们有手段可以优化

### 优化组件设计

1. 将更新部分抽离成单独组件

如上，我们可以讲计数部分单独抽离成 Counter 组件，这样计数组件的更新就影响不到 Hello 组件了，如下
```JS
const App = () => {
  console.log("app render");
  return (
    <div className="app">
      <Hello name="react" />
      <Counter />
    </div>
  );
};
```
2. 将不需要 re-render 的部分抽离，以插槽形式渲染（children）
```JS
// App 组件预留 children 位
const App = ({ children }) => {
  console.log("app render");
  const [count, addCount] = useState(0);
  return (
    <div className="app">
        {children}
      <div className="counter-num">{count}</div>
      <button
        onClick={() => {
          addCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
};

// 使用
<App>
  <Hello name="react" />
</App>
```
除此以外，也可以以其他属性的方式传入组件，其本质就是传入的变量，所以也不会引起 re-render 

3. React.memo

对于是否需要 re-render，类组件提供了两种方法：PureComponent 组件和 shouldComponentUpdate 生命周期方法。
对于函数组件来说，有一个 React.memo 方法，可以用来决定是否需要 re-render，如下我们将 Hello 组件 memo 化，这样点击更新数字的时候， Hello 组件是不会 re-render 的。除非 Hello 组件的 props 更新：
```JS
const Hello = React.memo(({ name }) => {
  console.log("hello render");
  return<div>hello {name}</div>;
});

const App = () => {
  console.log("app render");
  const [count, addCount] = useState(0);
  return (
    <div className="app">
      <Hello name="react" />
      <div className="counter-num">{count}</div>
      <button
        onClick={() => {
          addCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
};
```
memo 方法的源码定义简略如下

```JS
exportfunction memo<Props>(
  type: React$ElementType, // react 自定义组件
  compare?: (oldProps: Props, newProps: Props) => boolean, // 可选的比对函数，决定是否 re-render
) {
    ...
    const elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type,
    compare: compare === undefined ? null : compare,
  };
    ...
  
  return elementType;
}
```

memo 的关键比对逻辑如下，如果有传入 compare 函数则使用 compare 函数决定是否需要 re-render，否则使用浅比较 shallowEqual 决定是否需要 re-render：
```JS
var compare = Component.compare;
compare = compare !== null ? compare : shallowEqual;

if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
```

既然默认不传 compare 时，用的是浅对比，那么对于引用类的 props，就要注意了，尤其是事件处理的函数，如下，我们给 Hello 组件添加一个点击事件，这时我们发现每次点击计数，Hello 组件又开始 re-render了：
```JS
// 新增 onClick 处理函数
const Hello = memo(({ name, onClick }) => {
  console.log("hello render");
  return<div onClick={onClick}>hello {name}</div>;
});

const App = ({ children }) => {
  console.log("counter render");
  const [count, addCount] = useState(0);
  
  // 新增处理函数
  const clickHandler = () => {
    console.log("hello click");
  };

  return (
    <div className="counter">
      <Hello name="react" onClick={clickHandler} />
      <div className="counter-num">{count}</div>
      <button
        onClick={() => {
          addCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
};
```
这是因为每次点击计数，都会重新定义clickHandler处理函数，这样shallowEqual浅比较发现onClick属性值不同，于是将会进行re-render


## useCallback

这个时候我们可以使用useCallback将定义的函数缓存起来，如下就不会引起re-render了
```JS
// 新增处理函数，使用 useCallback 缓存起来
const clickHandler = useCallback(() => {
  console.log("hello click");
}, []);
```

useCallback 的原理主要是在挂载的时候，将定义的 callback 函数及 deps 依赖挂载该 hook 的 memoizedState，当更新时，将依赖进行对比，如果依赖没变，则直接返回老的callback函数，否则则更新新的callback函数及依赖：

```JS
// 挂载时
function mountCallback(callback, deps) {
  var hook = mountWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;
  hook.memoizedState = [callback, nextDeps];
  return callback;
}

// 更新时
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;
  var prevState = hook.memoizedState;

  if (prevState !== null) {
    if (nextDeps !== null) {
      var prevDeps = prevState[1];

      // 如果依赖未变，则直接返回老的函数
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  // 否则更新新的 callback 函数
  hook.memoizedState = [callback, nextDeps];
  return callback;
}
```

看起来好像是没问题了，但是如果我们在刚才 callback 函数中使用了 count 这个 state 值呢？

```JS
// 新增处理函数，使用 useCallback 缓存起来
// 在 callback 函数中使用 count
const clickHandler = useCallback(() => {
  console.log("count: ", count);
}, []);
```

当我们点击了几次计数，然后再点击Hello组件时，会发现我们打印的count还是挂载时候的值，而不是最新的 count值。其实，这都是是闭包惹得祸, 所以为了让 callback 函数中可以使用最新的state，我们还要将该state放入deps依赖，但是这样依赖更新了,callback函数也将会更新，于是Hello组件又将会re-render，这又回到了从前。

## useRef & useEffect

为了解决刚才的 useCallback 的闭包问题，我们换一个方式，引入 useRef 和 useEffect 来解决该问题：
```JS
const App = ({ children }) => {
  console.log("counter render");
  const [count, addCount] = useState(0);
  
  // 1、创建一个 countRef 
  const countRef = useRef(count);
  
  // 2、依赖改成 countRef
  // 浅对比 countRef 时，将不会引起 callback 函数更新
  // callback 函数又中可以读取到 countRef.current 值，即 count 的最新值
  const clickHandler = useCallback(() => {
    console.log("count: ", countRef.current);
  }, [countRef]);
  
  // 3、当 count 更新时，更新 countRef 的值
  useEffect(() => {
      countRef.current = count;
  }, [count]);

  return (
    <div className="counter">
      <Hello name="react" onClick={clickHandler} />
      <div className="counter-num">{count}</div>
      <button
        onClick={() => {
          addCount(count + 1);
        }}
      >
        add
      </button>
    </div>
  );
};
```
该方案总结如下：
* 通过 useRef 来保存变化的值
* 通过 useEffect 来更新变化的值
* 通过 useCallback 来返回固定的 callback

useRef 保存值的原理如下：

```JS
// 挂载 ref
function mountRef(initialValue) {
  var hook = mountWorkInProgressHook();
  
  // 创建一个 ref 对象，将值挂在 current 属性上
  var ref = {
    current: initialValue
  };

  {
    Object.seal(ref);
  }
    
  // 将 ref 挂到 hook 的 memoizedState 属性上，并返回
  hook.memoizedState = ref; 
  return ref;
}

// 更新 ref
function updateRef(initialValue) {
  var hook = updateWorkInProgressHook();
  return hook.memoizedState; // 直接返回 ref
}
```
注意不要跟 hooks API 中的 React.useMemo 搞混，这是两个完全不一样的东西。

### context 更新，引起的 re-render
这个另外单独分析