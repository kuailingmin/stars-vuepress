<template><div><h1 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>Demo</span></a></h1>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LitElement<span class="token punctuation">,</span>html <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'lit'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> customElement<span class="token punctuation">,</span> property <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'lit/decorators.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">@<span class="token function">customElement</span><span class="token punctuation">(</span><span class="token string">'stars-table'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">StarsTable</span> <span class="token keyword">extends</span> <span class="token class-name">LitElement</span><span class="token punctuation">{</span></span>
<span class="line">    @<span class="token function">property</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">}</span><span class="token punctuation">)</span> version <span class="token operator">=</span>  <span class="token string">'2.2.5'</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> html<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">          &lt;p>一个新时代组件化开发库"Lit"&lt;/p></span>
<span class="line">          &lt;p>版本号：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p></span>
<span class="line">       </span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终显示：</p>
<p><img src="@source/images/lit1.png" alt=""></p>
</div></template>


