# React Hooks 过时的闭包

::: tip 说明
  1. Hooks 简化了React 功能组件内部状态和副作用的管理。此外，可以将重复的逻辑提取到自定义挂钩中，以便在整个应用程序中重用。
  2. Hook 严重依赖 JavaScript闭包。这就是钩子如此富有表现力和简单的原因。但是闭包有时很棘手，使用钩子时可能会遇到的一个问题是过时的闭包。而且可能很难解决！让我们从提炼过时的闭包开始。然后你会看到陈旧的闭包如何影响 React 钩子，以及如何解决这个问题。
:::

### 1. 陈旧的关闭

工厂函数createIncrement(incBy)返回一个increment和log函数的元组。当被调用时，increment()函数增加了内部value通过incBy，而log()简单地将记录有关当前的信息的消息value：

```JS
function createIncrement(incBy) {
  let value = 0;
  function increment() {
    value += incBy;
    console.log(value);
  }
  const message = `Current value is ${value}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement(1);
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3
// Does not work!
log();

```

[increment, log] = createIncrement(1) 返回一组函数：一个函数增加内部值，另一个函数记录当前值。

然后 3 次调用increment()递增value到3.

最后，调用log()记录消息"Current value is 0"。嗯……这是出乎意料的，因为valueequals 3。

log()是一个陈旧的关闭。闭包log()已捕获message具有 的变量"Current value is 0"。

即使value变量在调用时多次递增increment()，该message变量也不会更新并始终保持一个过时的值"Current value is 0"。

<font color=red face="黑体">注：陈旧的闭包捕获具有过时值的变量！</font>

接下来让我们看看怎么修复

### 2. 修复过时的闭包
固定陈旧log()，需要关闭的关闭在实际改变的变量：value。
让我们将语句const message = ...;移到log()函数体中：

```JS
function createIncrement(incBy) {
  let value = 0;
  function increment() {
    value += incBy;
    console.log(value);
  }
  function log() {
    const message = `Current value is ${value}`;
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement(1);
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3
// Works!
log();       // logs "Current value is 3"

```

现在，在调用increment()函数3 次后，调用log()记录了实际的value: "Current value is 3"。

<font color=red face="黑体">注：log() 不再是陈旧的关闭！</font>

### 3. 过时的钩子闭合

#### useEffect()
让我们研究一下使用useEffect()hook时过时闭包的常见情况

在组件内部，`WatchCount`钩子useEffect()每 2 秒记录一次 的值count：
```JS
function WatchCount() {
  const [count, setCount] = useState(0);
  useEffect(function() {
    setInterval(function log() {
      console.log(`Count is: ${count}`);
    }, 2000);
  }, []);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1) }>
        Increase
      </button>
    </div>
  );
}
```

单击几次增加按钮。然后看看控制台，每 2 秒出现一次Count is: 0，尽管事实上count 状态变量实际上已经增加了几次。

为什么会发生？

在第一次渲染时，状态变量用count初始化0。组件安装后，useEffect()调用setInterval(log, 2000)定时器函数，该log()函数每 2 秒调度一次调用函数。在这里，闭包log()将count变量捕获为0。后来，即使count当增加增加按钮被按下时，log()由定时器功能称为闭合每2秒仍然使用count作为0从最初的渲染。log()成为陈旧的关闭。

解决方案是让知道useEffect()闭包log()依赖count并在count更改时正确处理间隔的重置：

```JS
function WatchCount() {
  const [count, setCount] = useState(0);
  useEffect(function() {
    const id = setInterval(function log() {
      console.log(`Count is: ${count}`);
    }, 2000);
    return function() {
      clearInterval(id);
    }
  }, [count]);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1) }>
        Increase
      </button>
    </div>
  );
}

```

正确设置依赖项后，useEffect()一旦count更改就更新闭包,正确管理钩子依赖是解决陈旧闭包问题的有效方法,建议启用eslint-plugin-react-hooks，它会检测被遗忘的依赖项

##### useState
该组件`<DelayedCount>`有 1 个按钮增加异步，以 1 秒延迟异步增加计数器。

```JS
function DelayedCount() {
  const [count, setCount] = useState(0);
  function handleClickAsync() {
    setTimeout(function delay() {
      setCount(count + 1);
    }, 1000);
  }
  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
    </div>
  );
}
```
每次单击setTimeout(delay, 1000)安排delay()1 秒后的执行。delay()将变量捕获count为0。两个delay()闭包（因为已经进行了 2 次点击）都将状态更新为相同的值：setCount(count + 1) = setCount(0 + 1) = setCount(1)。

这一切都是因为delay()，第二次点击的关闭已将过时的count变量捕获为0。

为了解决这个问题，让我们使用一种函数式的方式setCount(count => count + 1)来更新count状态：

```JS
function DelayedCount() {
  const [count, setCount] = useState(0);
  function handleClickAsync() {
    setTimeout(function delay() {
      setCount(count => count + 1);
    }, 1000);
  }
  function handleClickSync() {
    setCount(count + 1);
  }
  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
      <button onClick={handleClickSync}>Increase sync</button>
    </div>
  );
}
```

现在setCount(count => count + 1)更新里面的计数状态delay()。

当一个基于前一个状态返回新状态的回调函数被提供给状态更新函数时，React 确保将最新的状态值作为参数提供给该回调：

```JS
setCount(alwaysActualStateValue => newStateValue);
```

这就是为什么在状态更新期间出现的陈旧闭包问题通常可以通过使用函数式方式更新状态来很好地解决


### 总结
当闭包捕获过时的变量时，就会发生陈旧的闭包问题。

解决陈旧闭包的有效方法是正确设置 React 钩子的依赖项。或者，在状态陈旧的情况下，使用函数方式来更新状态。

关键要点是尝试为 hooks 提供捕获最新变量的闭包。