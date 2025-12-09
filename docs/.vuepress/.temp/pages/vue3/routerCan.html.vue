<template><div><h1 id="接收路由参数" tabindex="-1"><a class="header-anchor" href="#接收路由参数"><span>接收路由参数</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>vue3接收路由里面的参数</p>
</div>
<h2 id="路由定义" tabindex="-1"><a class="header-anchor" href="#路由定义"><span>路由定义</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/worktime/:id/:name'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Worktime'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/worktime/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的定义，如果外链url里面参数不够是无法访问到页面内容的
我在一个路由定义了2个参数&quot;id&quot;，&quot;name&quot;,那在vue3的页面里面怎么获取到这些参数呢？看下一步</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line">  <span class="token comment">// 在访问的页面直接导入router</span></span>
<span class="line">  <span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">'@/router/index'</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 在Router中的currentRoute里面能找到参数</span></span>
<span class="line">  <span class="token keyword">const</span> Params <span class="token operator">=</span> Router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>value<span class="token punctuation">.</span>params</span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Params<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果：</p>
<p><img src="@source/images/rt1.png" alt=""></p>
</div></template>


