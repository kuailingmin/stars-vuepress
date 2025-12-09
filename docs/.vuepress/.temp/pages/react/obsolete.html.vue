<template><div><h1 id="react-hooks-过时的闭包" tabindex="-1"><a class="header-anchor" href="#react-hooks-过时的闭包"><span>React Hooks 过时的闭包</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<ol>
<li>Hooks 简化了React 功能组件内部状态和副作用的管理。此外，可以将重复的逻辑提取到自定义挂钩中，以便在整个应用程序中重用。</li>
<li>Hook 严重依赖 JavaScript闭包。这就是钩子如此富有表现力和简单的原因。但是闭包有时很棘手，使用钩子时可能会遇到的一个问题是过时的闭包。而且可能很难解决！让我们从提炼过时的闭包开始。然后你会看到陈旧的闭包如何影响 React 钩子，以及如何解决这个问题。</li>
</ol>
</div>
<h3 id="_1-陈旧的关闭" tabindex="-1"><a class="header-anchor" href="#_1-陈旧的关闭"><span>1. 陈旧的关闭</span></a></h3>
<p>工厂函数createIncrement(incBy)返回一个increment和log函数的元组。当被调用时，increment()函数增加了内部value通过incBy，而log()简单地将记录有关当前的信息的消息value：</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function createIncrement(incBy) {</span>
<span class="line">  let value = 0;</span>
<span class="line">  function increment() {</span>
<span class="line">    value += incBy;</span>
<span class="line">    console.log(value);</span>
<span class="line">  }</span>
<span class="line">  const message = `Current value is ${value}`;</span>
<span class="line">  function log() {</span>
<span class="line">    console.log(message);</span>
<span class="line">  }</span>
<span class="line">  return [increment, log];</span>
<span class="line">}</span>
<span class="line">const [increment, log] = createIncrement(1);</span>
<span class="line">increment(); // logs 1</span>
<span class="line">increment(); // logs 2</span>
<span class="line">increment(); // logs 3</span>
<span class="line">// Does not work!</span>
<span class="line">log();</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[increment, log] = createIncrement(1) 返回一组函数：一个函数增加内部值，另一个函数记录当前值。</p>
<p>然后 3 次调用increment()递增value到3.</p>
<p>最后，调用log()记录消息&quot;Current value is 0&quot;。嗯……这是出乎意料的，因为valueequals 3。</p>
<p>log()是一个陈旧的关闭。闭包log()已捕获message具有 的变量&quot;Current value is 0&quot;。</p>
<p>即使value变量在调用时多次递增increment()，该message变量也不会更新并始终保持一个过时的值&quot;Current value is 0&quot;。</p>
<font color=red face="黑体">注：陈旧的闭包捕获具有过时值的变量！</font><p>接下来让我们看看怎么修复</p>
<h3 id="_2-修复过时的闭包" tabindex="-1"><a class="header-anchor" href="#_2-修复过时的闭包"><span>2. 修复过时的闭包</span></a></h3>
<p>固定陈旧log()，需要关闭的关闭在实际改变的变量：value。
让我们将语句const message = ...;移到log()函数体中：</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function createIncrement(incBy) {</span>
<span class="line">  let value = 0;</span>
<span class="line">  function increment() {</span>
<span class="line">    value += incBy;</span>
<span class="line">    console.log(value);</span>
<span class="line">  }</span>
<span class="line">  function log() {</span>
<span class="line">    const message = `Current value is ${value}`;</span>
<span class="line">    console.log(message);</span>
<span class="line">  }</span>
<span class="line">  </span>
<span class="line">  return [increment, log];</span>
<span class="line">}</span>
<span class="line">const [increment, log] = createIncrement(1);</span>
<span class="line">increment(); // logs 1</span>
<span class="line">increment(); // logs 2</span>
<span class="line">increment(); // logs 3</span>
<span class="line">// Works!</span>
<span class="line">log();       // logs &quot;Current value is 3&quot;</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，在调用increment()函数3 次后，调用log()记录了实际的value: &quot;Current value is 3&quot;。</p>
<font color=red face="黑体">注：log() 不再是陈旧的关闭！</font><h3 id="_3-过时的钩子闭合" tabindex="-1"><a class="header-anchor" href="#_3-过时的钩子闭合"><span>3. 过时的钩子闭合</span></a></h3>
<h4 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect"><span>useEffect()</span></a></h4>
<p>让我们研究一下使用useEffect()hook时过时闭包的常见情况</p>
<p>在组件内部，<code v-pre>WatchCount</code>钩子useEffect()每 2 秒记录一次 的值count：</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function WatchCount() {</span>
<span class="line">  const [count, setCount] = useState(0);</span>
<span class="line">  useEffect(function() {</span>
<span class="line">    setInterval(function log() {</span>
<span class="line">      console.log(`Count is: ${count}`);</span>
<span class="line">    }, 2000);</span>
<span class="line">  }, []);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      {count}</span>
<span class="line">      &lt;button onClick={() =&gt; setCount(count + 1) }&gt;</span>
<span class="line">        Increase</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单击几次增加按钮。然后看看控制台，每 2 秒出现一次Count is: 0，尽管事实上count 状态变量实际上已经增加了几次。</p>
<p>为什么会发生？</p>
<p>在第一次渲染时，状态变量用count初始化0。组件安装后，useEffect()调用setInterval(log, 2000)定时器函数，该log()函数每 2 秒调度一次调用函数。在这里，闭包log()将count变量捕获为0。后来，即使count当增加增加按钮被按下时，log()由定时器功能称为闭合每2秒仍然使用count作为0从最初的渲染。log()成为陈旧的关闭。</p>
<p>解决方案是让知道useEffect()闭包log()依赖count并在count更改时正确处理间隔的重置：</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function WatchCount() {</span>
<span class="line">  const [count, setCount] = useState(0);</span>
<span class="line">  useEffect(function() {</span>
<span class="line">    const id = setInterval(function log() {</span>
<span class="line">      console.log(`Count is: ${count}`);</span>
<span class="line">    }, 2000);</span>
<span class="line">    return function() {</span>
<span class="line">      clearInterval(id);</span>
<span class="line">    }</span>
<span class="line">  }, [count]);</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      {count}</span>
<span class="line">      &lt;button onClick={() =&gt; setCount(count + 1) }&gt;</span>
<span class="line">        Increase</span>
<span class="line">      &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正确设置依赖项后，useEffect()一旦count更改就更新闭包,正确管理钩子依赖是解决陈旧闭包问题的有效方法,建议启用eslint-plugin-react-hooks，它会检测被遗忘的依赖项</p>
<h5 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate"><span>useState</span></a></h5>
<p>该组件<code v-pre>&lt;DelayedCount&gt;</code>有 1 个按钮增加异步，以 1 秒延迟异步增加计数器。</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function DelayedCount() {</span>
<span class="line">  const [count, setCount] = useState(0);</span>
<span class="line">  function handleClickAsync() {</span>
<span class="line">    setTimeout(function delay() {</span>
<span class="line">      setCount(count + 1);</span>
<span class="line">    }, 1000);</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      {count}</span>
<span class="line">      &lt;button onClick={handleClickAsync}&gt;Increase async&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次单击setTimeout(delay, 1000)安排delay()1 秒后的执行。delay()将变量捕获count为0。两个delay()闭包（因为已经进行了 2 次点击）都将状态更新为相同的值：setCount(count + 1) = setCount(0 + 1) = setCount(1)。</p>
<p>这一切都是因为delay()，第二次点击的关闭已将过时的count变量捕获为0。</p>
<p>为了解决这个问题，让我们使用一种函数式的方式setCount(count =&gt; count + 1)来更新count状态：</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">function DelayedCount() {</span>
<span class="line">  const [count, setCount] = useState(0);</span>
<span class="line">  function handleClickAsync() {</span>
<span class="line">    setTimeout(function delay() {</span>
<span class="line">      setCount(count =&gt; count + 1);</span>
<span class="line">    }, 1000);</span>
<span class="line">  }</span>
<span class="line">  function handleClickSync() {</span>
<span class="line">    setCount(count + 1);</span>
<span class="line">  }</span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      {count}</span>
<span class="line">      &lt;button onClick={handleClickAsync}&gt;Increase async&lt;/button&gt;</span>
<span class="line">      &lt;button onClick={handleClickSync}&gt;Increase sync&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在setCount(count =&gt; count + 1)更新里面的计数状态delay()。</p>
<p>当一个基于前一个状态返回新状态的回调函数被提供给状态更新函数时，React 确保将最新的状态值作为参数提供给该回调：</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">setCount(alwaysActualStateValue =&gt; newStateValue);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这就是为什么在状态更新期间出现的陈旧闭包问题通常可以通过使用函数式方式更新状态来很好地解决</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p>当闭包捕获过时的变量时，就会发生陈旧的闭包问题。</p>
<p>解决陈旧闭包的有效方法是正确设置 React 钩子的依赖项。或者，在状态陈旧的情况下，使用函数方式来更新状态。</p>
<p>关键要点是尝试为 hooks 提供捕获最新变量的闭包。</p>
</div></template>


