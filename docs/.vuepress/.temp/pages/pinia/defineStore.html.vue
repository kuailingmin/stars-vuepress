<template><div><h1 id="definestore" tabindex="-1"><a class="header-anchor" href="#definestore"><span>defineStore</span></a></h1>
<p>在深入研究核心概念之前，我们需要知道存储是使用定义的defineStore()，并且它需要一个唯一的名称，作为第一个参数传递：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// useStore could be anything like useUser, useCart</span></span>
<span class="line"><span class="token comment">// the first argument is a unique id of the store across your application</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other options...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个名称，也称为id，是必要的，Pania 使用它来将Stores连接到 devtools。将返回的函数命名为use...是可组合项之间的约定，以使其使用习惯。</p>
<h3 id="使用store" tabindex="-1"><a class="header-anchor" href="#使用store"><span>使用Store</span></a></h3>
<p>我们正在定义useStore()一个Store，因为Store在被调用之前不会被创建setup()：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/counter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// you can return the whole store instance to use it in the template</span></span>
<span class="line">      store<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以根据需要定义任意数量的Store，并且应该在不同的文件中定义每个Store以充分利用 pinia（例如自动允许您的包进行代码拆分和 TypeScript 推理）。</p>
<p>如果您还没有使用setup组件，您仍然可以将 Pinia 与map helpers一起使用。</p>
<p>实例化Store后，您可以直接在Store中访问定义在state、getters和中的任何属性。actions我们将在接下来的页面中详细介绍这些内容，但自动补全会对您有所帮助。</p>
<font color=red  face="黑体">请注意，这store是一个用 包裹的对象reactive，这意味着不需要.value在 getter 之后编写</font><p>，但是像propsin一样setup，我们不能对其进行解构</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// ❌ This won't work because it breaks reactivity</span></span>
<span class="line">    <span class="token comment">// it's the same as destructuring from `props`</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> doubleCount <span class="token punctuation">}</span> <span class="token operator">=</span> store</span>
<span class="line"></span>
<span class="line">    name <span class="token comment">// "eduardo"</span></span>
<span class="line">    doubleCount <span class="token comment">// 2</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// will always be "eduardo"</span></span>
<span class="line">      name<span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// will always be 2</span></span>
<span class="line">      doubleCount<span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// this one will be reactive</span></span>
<span class="line">      <span class="token literal-property property">doubleValue</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span>doubleCount<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了从存储中提取属性同时保持其反应性，您需要使用storeToRefs(). 它将为任何反应性属性创建参考。当您仅使用商店中的状态但不调用任何操作时，这很有用：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> storeToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// `name` and `doubleCount` are reactive refs</span></span>
<span class="line">    <span class="token comment">// This will also create refs for properties added by plugins</span></span>
<span class="line">    <span class="token comment">// but skip any action or non reactive (non ref/reactive) property</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> doubleCount <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      name<span class="token punctuation">,</span></span>
<span class="line">      doubleCount</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


