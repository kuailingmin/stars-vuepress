<template><div><h1 id="前端自动化工具" tabindex="-1"><a class="header-anchor" href="#前端自动化工具"><span>前端自动化工具</span></a></h1>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>Plop是一个微生成器框架，之所以这样叫它 ，是因为它是一个可以允许你方便地创建具有一致性（通用性）的代码模板或文本文件的小工具。我们在代码中会经常创建具有同一种结构或模式的代码文件（路由、控制器、组件、辅助类等等）。这些结构和模式会经常演进，导致你无法很容易地在这些代码中找到可以代表当前最佳实践的代码去创建出一个新的类似模式的文件。这就是Plop要解决的问题。使用Plop，你可以很方便地使用代表最佳实践的文件模板去生成同样模式的新文件。使用Plop可以在命令行中方便地生成代码文件，这免去了我们在代码库中寻找和复制那些具有通用模式和结构的代码，这是创建新文件最简单的方法。</p>
</div>
<h2 id="why-generators" tabindex="-1"><a class="header-anchor" href="#why-generators"><span>Why Generators？</span></a></h2>
<p>因为当创建与代码分开的样板时，您自然会投入更多时间和思考<br>
因为在创建每条路由、组件、控制器、助手、测试、视图等时，可以为您的团队（或您自己）节省 5-15分钟<br>
因为上下文切换很昂贵，而且节省时间并不是自动化工作流的唯一好处</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2>
<ol>
<li>安装</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  yarn add plop  or  npm install plop <span class="token operator">-</span><span class="token constant">D</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>配置</li>
</ol>
<p>注：需要在项目工程根目录中添加“plopfile.js”</p>
<p>内容如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">plop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    plop<span class="token punctuation">.</span><span class="token function">setGenerator</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'这是一个描述属性'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">prompts</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span> <span class="token comment">// 操作类型</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token comment">// 配置变量定义</span></span>
<span class="line">                <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'请输入文件名称'</span><span class="token punctuation">,</span> <span class="token comment">//提示信息</span></span>
<span class="line">                <span class="token literal-property property">validate</span><span class="token operator">:</span> <span class="token string">''</span>  <span class="token comment">// 验证输入值</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'list'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'请选择你的职业？'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">choices</span><span class="token operator">:</span> <span class="token punctuation">[</span>  </span>
<span class="line">                    <span class="token string">'码农'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">'医生'</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string">'警察'</span></span>
<span class="line">                <span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'add'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'templates/{{name}}.vue'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>plopfile先接收plop对象</li>
<li>plop提供了setGenerator(name, config)方法来配置，config参数主要用3个属性“description，prompts，actions”</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">plop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// create your generators here</span></span>
<span class="line">    plop<span class="token punctuation">.</span><span class="token function">setGenerator</span><span class="token punctuation">(</span><span class="token string">'basics'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'this is a skeleton plopfile'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">prompts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// array of inquirer prompts</span></span>
<span class="line">        <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment">// array of actions</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>description：就是描述<br>
prompts：自定义配置要问用户的问题<br>
actions：最终文件生成配置项</p>
<h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h2>
<p>首先在package.json中配置 &quot;plop&quot;启动命令</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service serve"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service lint"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token string-property property">"plop"</span><span class="token operator">:</span> <span class="token string">"plop"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行运行命令： yarn plop
效果如下图：</p>
<p><img src="@source/images/p1.png" alt=""></p>
<h2 id="模版" tabindex="-1"><a class="header-anchor" href="#模版"><span>模版</span></a></h2>
<p>plop 配套的是用HBS模版，</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展"><span>扩展</span></a></h2>
<p>plop的模式能方便的让我们扩展不同文件体系的模版，比如tsx,ts,vue,text,html...等等,在vscode体系里面有单独的插件可以做快速代码模版生成的事，但plop的做法更加灵活，且可以让我们根据自定义变量，自定选项配置，集合模版动态生成不同需求的文件，在代码开发的耗时上提升了很大程度！这就是前端工具最主要的特点！</p>
</div></template>


