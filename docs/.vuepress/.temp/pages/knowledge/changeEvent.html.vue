<template><div><h1 id="chang-阻止冒泡" tabindex="-1"><a class="header-anchor" href="#chang-阻止冒泡"><span>@chang 阻止冒泡</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">场景</p>
<p>在antd vue 组件库中使用checkbox组件中，阻止事件冒泡</p>
</div>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 定义事件</span></span>
<span class="line">  <span class="token operator">&lt;</span>a<span class="token operator">-</span>checkbox </span>
<span class="line">    v<span class="token operator">-</span>model<span class="token operator">:</span>checked<span class="token operator">=</span><span class="token string">"isCheck"</span> </span>
<span class="line">    @click<span class="token punctuation">.</span>stop<span class="token operator">=</span><span class="token string">""</span> </span>
<span class="line">    @change<span class="token operator">=</span><span class="token string">"handleCheckChange(item)"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里只要加上 @click.stop=&quot;&quot; 就可以成功的阻止change事件冒泡了</p>
</div></template>


