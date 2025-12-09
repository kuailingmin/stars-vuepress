import{_ as s,c as e,a,o as l}from"./app-D755Bb6P.js";const i={};function c(d,n){return l(),e("div",null,[...n[0]||(n[0]=[a(`<h1 id="re-render原理及优化" tabindex="-1"><a class="header-anchor" href="#re-render原理及优化"><span>re-render原理及优化</span></a></h1><p>对于函数组件的 re-render，大致分为以下三种情况：</p><ul><li>组件本身使用 useState 或 useReducer 更新，引起的 re-render</li><li>父组件更新引起的 re-render</li><li>组件本身使用了 useContext，context 更新引起的 re-render</li></ul><h2 id="_1-使用-usestate-或-usereducer-更新-引起的-re-render" tabindex="-1"><a class="header-anchor" href="#_1-使用-usestate-或-usereducer-更新-引起的-re-render"><span>1. 使用 useState 或 useReducer 更新，引起的 re-render</span></a></h2><h3 id="常规使用" tabindex="-1"><a class="header-anchor" href="#常规使用"><span>常规使用</span></a></h3><p>以计数组件为例，如下每次点击 add，都会打印 &#39;counter render&#39;，表示引起了 re-render</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const Counter = () =&gt; {</span>
<span class="line">  console.log(&#39;counter render&#39;);</span>
<span class="line">  const [count, addCount ] = useState(0);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;counter&quot;&gt;</span>
<span class="line">      &lt;div className=&quot;counter-num&quot;&gt;{count}&lt;/div&gt;</span>
<span class="line">      &lt;button onClick={() =&gt; {addCount(count + 1)}}&gt;add&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  )</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="immutation-state" tabindex="-1"><a class="header-anchor" href="#immutation-state"><span>immutation state</span></a></h3><p>下面我们将上面计数组件中的 state 值改成引用类型试试，如下，发现点击并不会引起 re-render</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const Counter = () =&gt; {</span>
<span class="line">  console.log(&quot;counter render&quot;);</span>
<span class="line">  const [count, addCount] = useState({ num: 0, time: Date.now() });</span>
<span class="line">  const clickHandler = () =&gt; {</span>
<span class="line">    count.num++;</span>
<span class="line">    count.time = Date.now();</span>
<span class="line">    addCount(count);</span>
<span class="line">  };</span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;counter&quot;&gt;</span>
<span class="line">      &lt;div className=&quot;counter-num&quot;&gt;</span>
<span class="line">        {count.num}, {count.time}</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;button onClick={clickHandler}&gt;add&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真实的原因在于，更新 state 的时候，会有一个新老 state 的比较，用的是 Object.is 进行比较，如果为 true 则直接返回不更新，源码如下（Object.is 会先判断 Object.is 是否支持，如果不支持则重新实现,eagerState 就是 oldState）</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">if (objectIs(eagerState, currentState)) {</span>
<span class="line">  return;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以更新 state 时候要注意，state 为不可变数据，每次更新都需要一个新值才会有效</p><h3 id="强制更新" tabindex="-1"><a class="header-anchor" href="#强制更新"><span>强制更新</span></a></h3><p>相比于类组件有个 forceUpdate 方法，函数组件是没有该方法的，但是其实也可以自己写一个，如下，由于 Object.is({}, {}) 总是 false，所以总能引起更新</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const [, forceUpdate] = useState({});</span>
<span class="line">forceUpdate({})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>说完 useState 的更新，其实 useReducer 就不用说了，因为源码里面 useState 的更新其实调用的就是 useReducer 的更新，如下：</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// 源码片段</span>
<span class="line">function updateState(initialState) {</span>
<span class="line">  return updateReducer(basicStateReducer);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-父组件更新引起子组件的re-render" tabindex="-1"><a class="header-anchor" href="#_2-父组件更新引起子组件的re-render"><span>2. 父组件更新引起子组件的re-render</span></a></h2><h3 id="常规使用-1" tabindex="-1"><a class="header-anchor" href="#常规使用-1"><span>常规使用</span></a></h3><p>现在稍微改造上面计数的组件，添加一个子组件 Hello，如下点击会发现，每次都会输出 &quot;hello render&quot;，也就是说，每次更新都引起了 Hello 的 re-render，但是其实 Hello 组件的属性根本就没有改变</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const Hello = ({ name }) =&gt; {</span>
<span class="line">  console.log(&quot;hello render&quot;);</span>
<span class="line">  return&lt;div&gt;hello {name}&lt;/div&gt;;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">const App = () =&gt; {</span>
<span class="line">  console.log(&quot;app render&quot;);</span>
<span class="line">  const [count, addCount] = useState(0);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;app&quot;&gt;</span>
<span class="line">      &lt;Hello name=&quot;react&quot; /&gt;</span>
<span class="line">      &lt;div className=&quot;counter-num&quot;&gt;{count}&lt;/div&gt;</span>
<span class="line">      &lt;button</span>
<span class="line">        onClick={() =&gt; {</span>
<span class="line">          addCount(count + 1);</span>
<span class="line">        }}</span>
<span class="line">      &gt;</span>
<span class="line">        add</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这种不必要的 re-render，我们有手段可以优化</p><h3 id="优化组件设计" tabindex="-1"><a class="header-anchor" href="#优化组件设计"><span>优化组件设计</span></a></h3><ol><li>将更新部分抽离成单独组件</li></ol><p>如上，我们可以讲计数部分单独抽离成 Counter 组件，这样计数组件的更新就影响不到 Hello 组件了，如下</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const App = () =&gt; {</span>
<span class="line">  console.log(&quot;app render&quot;);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;app&quot;&gt;</span>
<span class="line">      &lt;Hello name=&quot;react&quot; /&gt;</span>
<span class="line">      &lt;Counter /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将不需要 re-render 的部分抽离，以插槽形式渲染（children）</li></ol><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// App 组件预留 children 位</span>
<span class="line">const App = ({ children }) =&gt; {</span>
<span class="line">  console.log(&quot;app render&quot;);</span>
<span class="line">  const [count, addCount] = useState(0);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;app&quot;&gt;</span>
<span class="line">        {children}</span>
<span class="line">      &lt;div className=&quot;counter-num&quot;&gt;{count}&lt;/div&gt;</span>
<span class="line">      &lt;button</span>
<span class="line">        onClick={() =&gt; {</span>
<span class="line">          addCount(count + 1);</span>
<span class="line">        }}</span>
<span class="line">      &gt;</span>
<span class="line">        add</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">// 使用</span>
<span class="line">&lt;App&gt;</span>
<span class="line">  &lt;Hello name=&quot;react&quot; /&gt;</span>
<span class="line">&lt;/App&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此以外，也可以以其他属性的方式传入组件，其本质就是传入的变量，所以也不会引起 re-render</p><ol start="3"><li>React.memo</li></ol><p>对于是否需要 re-render，类组件提供了两种方法：PureComponent 组件和 shouldComponentUpdate 生命周期方法。 对于函数组件来说，有一个 React.memo 方法，可以用来决定是否需要 re-render，如下我们将 Hello 组件 memo 化，这样点击更新数字的时候， Hello 组件是不会 re-render 的。除非 Hello 组件的 props 更新：</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const Hello = React.memo(({ name }) =&gt; {</span>
<span class="line">  console.log(&quot;hello render&quot;);</span>
<span class="line">  return&lt;div&gt;hello {name}&lt;/div&gt;;</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">const App = () =&gt; {</span>
<span class="line">  console.log(&quot;app render&quot;);</span>
<span class="line">  const [count, addCount] = useState(0);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;app&quot;&gt;</span>
<span class="line">      &lt;Hello name=&quot;react&quot; /&gt;</span>
<span class="line">      &lt;div className=&quot;counter-num&quot;&gt;{count}&lt;/div&gt;</span>
<span class="line">      &lt;button</span>
<span class="line">        onClick={() =&gt; {</span>
<span class="line">          addCount(count + 1);</span>
<span class="line">        }}</span>
<span class="line">      &gt;</span>
<span class="line">        add</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>memo 方法的源码定义简略如下</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">exportfunction memo&lt;Props&gt;(</span>
<span class="line">  type: React$ElementType, // react 自定义组件</span>
<span class="line">  compare?: (oldProps: Props, newProps: Props) =&gt; boolean, // 可选的比对函数，决定是否 re-render</span>
<span class="line">) {</span>
<span class="line">    ...</span>
<span class="line">    const elementType = {</span>
<span class="line">    $$typeof: REACT_MEMO_TYPE,</span>
<span class="line">    type,</span>
<span class="line">    compare: compare === undefined ? null : compare,</span>
<span class="line">  };</span>
<span class="line">    ...</span>
<span class="line">  </span>
<span class="line">  return elementType;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>memo 的关键比对逻辑如下，如果有传入 compare 函数则使用 compare 函数决定是否需要 re-render，否则使用浅比较 shallowEqual 决定是否需要 re-render：</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">var compare = Component.compare;</span>
<span class="line">compare = compare !== null ? compare : shallowEqual;</span>
<span class="line"></span>
<span class="line">if (compare(prevProps, nextProps) &amp;&amp; current.ref === workInProgress.ref) {</span>
<span class="line">  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然默认不传 compare 时，用的是浅对比，那么对于引用类的 props，就要注意了，尤其是事件处理的函数，如下，我们给 Hello 组件添加一个点击事件，这时我们发现每次点击计数，Hello 组件又开始 re-render了：</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// 新增 onClick 处理函数</span>
<span class="line">const Hello = memo(({ name, onClick }) =&gt; {</span>
<span class="line">  console.log(&quot;hello render&quot;);</span>
<span class="line">  return&lt;div onClick={onClick}&gt;hello {name}&lt;/div&gt;;</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">const App = ({ children }) =&gt; {</span>
<span class="line">  console.log(&quot;counter render&quot;);</span>
<span class="line">  const [count, addCount] = useState(0);</span>
<span class="line">  </span>
<span class="line">  // 新增处理函数</span>
<span class="line">  const clickHandler = () =&gt; {</span>
<span class="line">    console.log(&quot;hello click&quot;);</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;counter&quot;&gt;</span>
<span class="line">      &lt;Hello name=&quot;react&quot; onClick={clickHandler} /&gt;</span>
<span class="line">      &lt;div className=&quot;counter-num&quot;&gt;{count}&lt;/div&gt;</span>
<span class="line">      &lt;button</span>
<span class="line">        onClick={() =&gt; {</span>
<span class="line">          addCount(count + 1);</span>
<span class="line">        }}</span>
<span class="line">      &gt;</span>
<span class="line">        add</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为每次点击计数，都会重新定义clickHandler处理函数，这样shallowEqual浅比较发现onClick属性值不同，于是将会进行re-render</p><h2 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback"><span>useCallback</span></a></h2><p>这个时候我们可以使用useCallback将定义的函数缓存起来，如下就不会引起re-render了</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// 新增处理函数，使用 useCallback 缓存起来</span>
<span class="line">const clickHandler = useCallback(() =&gt; {</span>
<span class="line">  console.log(&quot;hello click&quot;);</span>
<span class="line">}, []);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useCallback 的原理主要是在挂载的时候，将定义的 callback 函数及 deps 依赖挂载该 hook 的 memoizedState，当更新时，将依赖进行对比，如果依赖没变，则直接返回老的callback函数，否则则更新新的callback函数及依赖：</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// 挂载时</span>
<span class="line">function mountCallback(callback, deps) {</span>
<span class="line">  var hook = mountWorkInProgressHook();</span>
<span class="line">  var nextDeps = deps === undefined ? null : deps;</span>
<span class="line">  hook.memoizedState = [callback, nextDeps];</span>
<span class="line">  return callback;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 更新时</span>
<span class="line">function updateCallback(callback, deps) {</span>
<span class="line">  var hook = updateWorkInProgressHook();</span>
<span class="line">  var nextDeps = deps === undefined ? null : deps;</span>
<span class="line">  var prevState = hook.memoizedState;</span>
<span class="line"></span>
<span class="line">  if (prevState !== null) {</span>
<span class="line">    if (nextDeps !== null) {</span>
<span class="line">      var prevDeps = prevState[1];</span>
<span class="line"></span>
<span class="line">      // 如果依赖未变，则直接返回老的函数</span>
<span class="line">      if (areHookInputsEqual(nextDeps, prevDeps)) {</span>
<span class="line">        return prevState[0];</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  // 否则更新新的 callback 函数</span>
<span class="line">  hook.memoizedState = [callback, nextDeps];</span>
<span class="line">  return callback;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来好像是没问题了，但是如果我们在刚才 callback 函数中使用了 count 这个 state 值呢？</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// 新增处理函数，使用 useCallback 缓存起来</span>
<span class="line">// 在 callback 函数中使用 count</span>
<span class="line">const clickHandler = useCallback(() =&gt; {</span>
<span class="line">  console.log(&quot;count: &quot;, count);</span>
<span class="line">}, []);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们点击了几次计数，然后再点击Hello组件时，会发现我们打印的count还是挂载时候的值，而不是最新的 count值。其实，这都是是闭包惹得祸, 所以为了让 callback 函数中可以使用最新的state，我们还要将该state放入deps依赖，但是这样依赖更新了,callback函数也将会更新，于是Hello组件又将会re-render，这又回到了从前。</p><h2 id="useref-useeffect" tabindex="-1"><a class="header-anchor" href="#useref-useeffect"><span>useRef &amp; useEffect</span></a></h2><p>为了解决刚才的 useCallback 的闭包问题，我们换一个方式，引入 useRef 和 useEffect 来解决该问题：</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const App = ({ children }) =&gt; {</span>
<span class="line">  console.log(&quot;counter render&quot;);</span>
<span class="line">  const [count, addCount] = useState(0);</span>
<span class="line">  </span>
<span class="line">  // 1、创建一个 countRef </span>
<span class="line">  const countRef = useRef(count);</span>
<span class="line">  </span>
<span class="line">  // 2、依赖改成 countRef</span>
<span class="line">  // 浅对比 countRef 时，将不会引起 callback 函数更新</span>
<span class="line">  // callback 函数又中可以读取到 countRef.current 值，即 count 的最新值</span>
<span class="line">  const clickHandler = useCallback(() =&gt; {</span>
<span class="line">    console.log(&quot;count: &quot;, countRef.current);</span>
<span class="line">  }, [countRef]);</span>
<span class="line">  </span>
<span class="line">  // 3、当 count 更新时，更新 countRef 的值</span>
<span class="line">  useEffect(() =&gt; {</span>
<span class="line">      countRef.current = count;</span>
<span class="line">  }, [count]);</span>
<span class="line"></span>
<span class="line">  return (</span>
<span class="line">    &lt;div className=&quot;counter&quot;&gt;</span>
<span class="line">      &lt;Hello name=&quot;react&quot; onClick={clickHandler} /&gt;</span>
<span class="line">      &lt;div className=&quot;counter-num&quot;&gt;{count}&lt;/div&gt;</span>
<span class="line">      &lt;button</span>
<span class="line">        onClick={() =&gt; {</span>
<span class="line">          addCount(count + 1);</span>
<span class="line">        }}</span>
<span class="line">      &gt;</span>
<span class="line">        add</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方案总结如下：</p><ul><li>通过 useRef 来保存变化的值</li><li>通过 useEffect 来更新变化的值</li><li>通过 useCallback 来返回固定的 callback</li></ul><p>useRef 保存值的原理如下：</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">// 挂载 ref</span>
<span class="line">function mountRef(initialValue) {</span>
<span class="line">  var hook = mountWorkInProgressHook();</span>
<span class="line">  </span>
<span class="line">  // 创建一个 ref 对象，将值挂在 current 属性上</span>
<span class="line">  var ref = {</span>
<span class="line">    current: initialValue</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  {</span>
<span class="line">    Object.seal(ref);</span>
<span class="line">  }</span>
<span class="line">    </span>
<span class="line">  // 将 ref 挂到 hook 的 memoizedState 属性上，并返回</span>
<span class="line">  hook.memoizedState = ref; </span>
<span class="line">  return ref;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 更新 ref</span>
<span class="line">function updateRef(initialValue) {</span>
<span class="line">  var hook = updateWorkInProgressHook();</span>
<span class="line">  return hook.memoizedState; // 直接返回 ref</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意不要跟 hooks API 中的 React.useMemo 搞混，这是两个完全不一样的东西。</p><h3 id="context-更新-引起的-re-render" tabindex="-1"><a class="header-anchor" href="#context-更新-引起的-re-render"><span>context 更新，引起的 re-render</span></a></h3><p>这个另外单独分析</p>`,58)])])}const p=s(i,[["render",c],["__file","render.html.vue"]]),t=JSON.parse(`{"path":"/react/render.html","title":"re-render原理及优化","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1722322323000,"contributors":[{"name":"前端艺术者","username":"","email":"kuailingmin@126.com","commits":1}],"changelog":[{"hash":"444e0c9033fc5359522e4a4695075e0e365d6291","time":1722322323000,"email":"kuailingmin@126.com","author":"前端艺术者","message":"新增内容"}]},"filePathRelative":"react/render.md","excerpt":"\\n<p>对于函数组件的 re-render，大致分为以下三种情况：</p>\\n<ul>\\n<li>组件本身使用 useState 或 useReducer 更新，引起的 re-render</li>\\n<li>父组件更新引起的 re-render</li>\\n<li>组件本身使用了 useContext，context 更新引起的 re-render</li>\\n</ul>\\n<h2>1. 使用 useState 或 useReducer 更新，引起的 re-render</h2>\\n<h3>常规使用</h3>\\n<p>以计数组件为例，如下每次点击 add，都会打印 'counter render'，表示引起了 re-render</p>"}`);export{p as comp,t as data};
