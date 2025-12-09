<template><div><h1 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式"><span>响应式</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>在vue3 提供了Ref和Reactive做数据响应</p>
</div>
<p><strong>Ref</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">b <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">//ts-error</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好处</p>
<ol>
<li>显示调用，类型检查</li>
<li>相比Reactive局限更少</li>
</ol>
<p>坏处</p>
<ol>
<li>用'.value'</li>
</ol>
<p><strong>Reactive</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">a<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line">b<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好处</p>
<ol>
<li>自动Unwrap(即不需要‘.value’)</li>
</ol>
<p>坏处</p>
<ol>
<li>在类型上和一般对象没有区别,除非看上下文才能区别</li>
<li>使用ES6解构会使响应性丢失，我们会用toRef或toRefs</li>
<li>需要使用箭头函数包装才能使用监听‘watch’</li>
</ol>
</div></template>


