<template><div><h1 id="工程配置" tabindex="-1"><a class="header-anchor" href="#工程配置"><span>工程配置</span></a></h1>
<h2 id="路径别名" tabindex="-1"><a class="header-anchor" href="#路径别名"><span>路径别名</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>方便我们在开发中很快的导入文件路径，而不是无限的'../'去找文件,如果项目支持ts,那么所有.ts文件遵循tsconfig的别名配置原则，如果是.vue文件，则支持vue.config.js配置原则</p>
</div>
<p><strong>vue文件添加路径依赖</strong></br></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h5 id="在vue-config-js中的配置" tabindex="-1"><a class="header-anchor" href="#在vue-config-js中的配置"><span>在vue.config.js中的配置 </br></span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias</span>
<span class="line highlighted">      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@Views'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/views'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@ViewsCom'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/viewsCom'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@Plugin'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/plugin'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@Component'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/components'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@Router'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/router'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@Interface'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/interface'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注： 这里我们针对src配置了别名是'@',在使用过程中直接‘@/文件路径’即可，也可以灵活配置多个路径别名，实例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> setI18nLanguage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>ts文件添加路径依赖</strong></br></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="打包分析" tabindex="-1"><a class="header-anchor" href="#打包分析"><span>打包分析</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>在打包之后会自动弹出一个网页，展示项目中所有js文件的体积大小</p>
</div>
<p><strong>安装webpack-bundle-analyzer</strong></br></p>
<p><code v-pre>yarn add webpack-bundle-analyzer -D</code> <strong>or</strong> <code v-pre>npm install webpack-bundle-analyzer --dev-save</code></p>
<h5 id="在vue-config-js中的配置-1" tabindex="-1"><a class="header-anchor" href="#在vue-config-js中的配置-1"><span>在vue.config.js中的配置 </br></span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导入依赖</span></span>
<span class="line highlighted"><span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-bundle-analyzer'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin</span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line highlighted">     config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">'webpack-bundle-analyzer'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>BundleAnalyzerPlugin<span class="token punctuation">)</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy配置" tabindex="-1"><a class="header-anchor" href="#proxy配置"><span>Proxy配置</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>之前Vue2.x 中基于 Object.defineProperty 的实现所存在的很多限制：无法监听 属性的添加和删除、数组索引和长度的变更，并可以支持 Map、Set、WeakMap 和 WeakSet,现在Vue3.x放弃使用了Object.defineProperty而选择了使用更快的原生Proxy</p>
</div>
<p><strong>添加路径依赖</strong></br></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="gzip压缩" tabindex="-1"><a class="header-anchor" href="#gzip压缩"><span>gzip压缩</span></a></h2>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>在业务发展越来越庞大的时候，也会不断增加前端打包之后的代码体积，等那天到来的时候我们可能要对包进行压缩体积的操作，vue生态提供了gzip这样的机制</p>
</div>
<p><strong>安装compression-webpack-plugin</strong></br></p>
<p><code v-pre>yarn add compression-webpack-plugin -D</code> </br><strong>or</strong></br> <code v-pre>npm install compression-webpack-plugin --dev-save</code></p>
<h5 id="在vue-config-js中的配置-2" tabindex="-1"><a class="header-anchor" href="#在vue-config-js中的配置-2"><span>在vue.config.js中的配置 </br></span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 导入依赖</span></span>
<span class="line highlighted"><span class="token keyword">const</span> CompressionWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'compression-webpack-plugin'</span><span class="token punctuation">)</span></span>
<span class="line highlighted"><span class="token keyword">const</span> productionGzipExtensions <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|css|json|txt|html|ico|svg|ts)(\?.*)?$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line"> <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// gzip</span></span>
<span class="line highlighted">    config<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">'compression-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span></span>
<span class="line highlighted">      <span class="token keyword">new</span> <span class="token class-name">CompressionWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">algorithm</span><span class="token operator">:</span> <span class="token string">'gzip'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token literal-property property">test</span><span class="token operator">:</span> productionGzipExtensions<span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token literal-property property">minRatio</span><span class="token operator">:</span> <span class="token number">0.8</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">)</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：这里依赖插件（compression-webpack-plugin）有些7版本以上有问题，所以降到6.0.5版本使用</p>
</div></template>


