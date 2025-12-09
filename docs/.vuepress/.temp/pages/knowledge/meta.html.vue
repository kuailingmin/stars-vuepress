<template><div><h1 id="meta标签" tabindex="-1"><a class="header-anchor" href="#meta标签"><span>meta标签</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>meta标签可能有些人并不关心，其实很多前端实现都需要它的帮助，尤其搜索引擎的场景中，下面总结多个开发中会使用到的技术点。<br/>
meta有个必须的属性content用于表示需要设置的项的值。<br/>
meta存在两个非必须的属性http-equiv和name, 用于表示要设置的项。</p>
</div>
<h2 id="http-equiv属性" tabindex="-1"><a class="header-anchor" href="#http-equiv属性"><span>http-equiv属性</span></a></h2>
<p>http-equiv一般设置的都是与http请求头相关的信息，设置的值会关联到http头部。也就是说浏览器在请求服务器获取html的时候，服务器会将html中设置的meta放在响应头中返回给浏览器。常见的类型比如content-type, expires, refresh, set-cookie, window-target, charset， pragma等等</p>
<h3 id="content-type" tabindex="-1"><a class="header-anchor" href="#content-type"><span>content-type</span></a></h3>
  <meta http-equiv="content-type" content="text/html charset=utf8">可以用来声明文档类型，设置字符集，content-type几乎所有的属性都可以在meta中进行设置。
<p>浏览器的头信息就会包含:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line">  content-type: text/html charset=utf8</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="expires" tabindex="-1"><a class="header-anchor" href="#expires"><span>expires</span></a></h3>
<p>用于设置浏览器的过期时间, 其实就是响应头中的expires属性。
无效的日期，比如 0, 代表着过去的日期，即该资源已经过期。
如果在Cache-Control响应头设置了 &quot;max-age&quot; 或者 &quot;s-max-age&quot; 指令，那么 Expires 头会被忽略。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>expires<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>31 Dec 2021<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="refresh" tabindex="-1"><a class="header-anchor" href="#refresh"><span>refresh</span></a></h3>
<p>该种设定表示5秒自动刷新并且跳转到指定的网页。如果不设置url的值那么浏览器则刷新本网页。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5 url=http://www.zhiqianduan.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="window-target" tabindex="-1"><a class="header-anchor" href="#window-target"><span>window-target</span></a></h3>
<p>强制页面在当前窗口以独立页面显示, 可以防止别人在框架中调用自己的页面。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line">&lt;meta http-equiv="window-target" content="_top'></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="pragma" tabindex="-1"><a class="header-anchor" href="#pragma"><span>pragma</span></a></h3>
<p>禁止浏览器从本地计算机的缓存中访问页面的内容</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pragma<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-cache<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="name属性" tabindex="-1"><a class="header-anchor" href="#name属性"><span>name属性</span></a></h2>
<p>name属性主要用于描述网页，与对应的content中的内容主要是便于搜索引擎查找信息和分类信息用的, 用法与http-equiv相同，name设置属性名，content设置属性值。</p>
<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h3>
<p>author用来标注网页的作者</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>klm@mail.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>description</span></a></h3>
<p>description用来告诉搜素引擎当前网页的主要内容，是关于网站的一段描述信息。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>这是我的HTML<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="keywords" tabindex="-1"><a class="header-anchor" href="#keywords"><span>keywords</span></a></h3>
<p>keywords设置网页的关键字，来告诉浏览器关键字是什么。是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keywords<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hello world<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="generator" tabindex="-1"><a class="header-anchor" href="#generator"><span>generator</span></a></h3>
<p>表示当前html是用什么工具编写生成的，并没有实际作用，一般是编辑器自动创建的。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>generator<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vscode<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="revised" tabindex="-1"><a class="header-anchor" href="#revised"><span>revised</span></a></h3>
<p>指定页面的最新版本</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>revised<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>V2，2015/10/1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="robots" tabindex="-1"><a class="header-anchor" href="#robots"><span>robots</span></a></h3>
<p>告诉搜索引擎机器人抓取哪些页面，all / none / index / noindex / follow / nofollow。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>robots<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>all：文件将被检索，且页面上的链接可以被查询；</li>
<li>none：文件将不被检索，且页面上的链接不可以被查询；</li>
<li>index：文件将被检索；</li>
<li>follow：页面上的链接可以被查询；</li>
<li>noindex：文件将不被检索，但页面上的链接可以被查询；</li>
<li>nofollow：文件将不被检索，页面上的链接可以被查询。</li>
</ul>
<h2 id="scheme属性" tabindex="-1"><a class="header-anchor" href="#scheme属性"><span>scheme属性</span></a></h2>
<p>scheme 属性用于指定要用来翻译属性值的方案。此方案应该在由 head 标签的 profile 属性指定的概况文件中进行了定义。html5不支持该属性。</p>
</div></template>


