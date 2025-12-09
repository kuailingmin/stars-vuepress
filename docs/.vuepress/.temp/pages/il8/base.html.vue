<template><div><h1 id="前端国际化" tabindex="-1"><a class="header-anchor" href="#前端国际化"><span>前端国际化</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>在一些项目中和国际接轨，这个时候需要前端展示能够很方便的展示不同国家的内容，所以诞生了一些国际化的方案，方式有2类，第一类切换国家语言的时候页面刷新，第二类是切换语言的时候页面不刷新，只改变语言内容。我们从用户体验角度选择了第二类方式来做前端国际化！</p>
</div>
<h3 id="安装react-i18next" tabindex="-1"><a class="header-anchor" href="#安装react-i18next"><span>安装react-i18next</span></a></h3>
<p>依赖安装</p>
<div class="language-cmd line-numbers-mode" data-highlighter="prismjs" data-ext="cmd"><pre v-pre><code class="language-cmd"><span class="line">  pnpm add i18next i18next-http-backend i18next-browser-languagedetector -D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="创建locales文件夹" tabindex="-1"><a class="header-anchor" href="#创建locales文件夹"><span>创建locales文件夹</span></a></h3>
<p>具体目录如下</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code class="language-markdown"><span class="line"></span>
<span class="line">  ├── src</span>
<span class="line">       | locales</span>
<span class="line">           | en</span>
<span class="line">              | system.ts</span>
<span class="line">              | public.ts</span>
<span class="line">           | utils</span>
<span class="line">              | index.ts</span>
<span class="line">           | zh</span>
<span class="line">              | system.ts</span>
<span class="line">              | public.ts</span>
<span class="line">           index.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="index-ts" tabindex="-1"><a class="header-anchor" href="#index-ts"><span>index.ts</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">    <span class="token comment">// 导入依赖</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> initReactI18next <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-i18next'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> getZhLang<span class="token punctuation">,</span> getEnLang <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">'i18next'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">import</span> Backend <span class="token keyword">from</span> <span class="token string">'i18next-http-backend'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">import</span> LanguageDetector <span class="token keyword">from</span> <span class="token string">'i18next-browser-languagedetector'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    i18n</span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Backend<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LanguageDetector<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>initReactI18next<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启debug模式</span></span>
<span class="line">        fallbackLng<span class="token operator">:</span> <span class="token string">'zh'</span><span class="token punctuation">,</span> <span class="token comment">// 默认语言</span></span>
<span class="line">        interpolation<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            escapeValue<span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        resources<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        zh<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            translation<span class="token operator">:</span> <span class="token function">getZhLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取中文配置</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        en<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            translation<span class="token operator">:</span> <span class="token function">getEnLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取英文配置</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">default</span> i18n<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里getEnLang()和getZhLang()是获取不同语言配置的方法，代码目录在utils/index.ts,具体内容如下</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">    <span class="token doc-comment comment">/** 获取中文翻译文件 */</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getZhLang</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> langFiles <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'../zh/*ts'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span> eager<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> FileParams<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">handleFileList</span><span class="token punctuation">(</span>langFiles<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/** 获取英文翻译文件 */</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getEnLang</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> langFiles <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'../en/*ts'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">'default'</span><span class="token punctuation">,</span> eager<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> FileParams<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">handleFileList</span><span class="token punctuation">(</span>langFiles<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们通过<font color="#DC143C">import.meta.glob</font>把多个翻译文件打包成一个对象，然后通过handleFileList方法处理成需要的格式</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 处理文件转为对应格式</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">files</span> - 文件集</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">handleFileList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token operator">:</span> FileParams<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> result<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> data <span class="token operator">=</span> files<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> fileArr <span class="token operator">=</span> key<span class="token operator">?.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> fileName <span class="token operator">=</span> fileArr<span class="token operator">?.</span><span class="token punctuation">[</span>fileArr<span class="token operator">?.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fileName<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> name <span class="token operator">=</span> fileName<span class="token operator">?.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.ts'</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> result<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上配置，我们就可以通过 <font color="#DC143C">文件名.key</font>的方式获取到对应语言的配置了</p>
<h3 id="翻译配置" tabindex="-1"><a class="header-anchor" href="#翻译配置"><span>翻译配置</span></a></h3>
<p>目录结构locales/zh 和 locales/en</p>
<p>中文配置：locales/zh/system.ts</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    create<span class="token operator">:</span> <span class="token string">'创建'</span><span class="token punctuation">,</span></span>
<span class="line">    update<span class="token operator">:</span> <span class="token string">'更新'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">delete</span><span class="token operator">:</span> <span class="token string">'删除'</span><span class="token punctuation">,</span></span>
<span class="line">    detail<span class="token operator">:</span> <span class="token string">'详情'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">export</span><span class="token operator">:</span> <span class="token string">'导出'</span><span class="token punctuation">,</span></span>
<span class="line">    status<span class="token operator">:</span> <span class="token string">'状态'</span><span class="token punctuation">,</span></span>
<span class="line">    clean<span class="token operator">:</span> <span class="token string">'清空'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的英文配置：locales/en/system.ts</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    create<span class="token operator">:</span> <span class="token string">'create'</span><span class="token punctuation">,</span></span>
<span class="line">    update<span class="token operator">:</span> <span class="token string">'update'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">delete</span><span class="token operator">:</span> <span class="token string">'delete'</span><span class="token punctuation">,</span></span>
<span class="line">    detail<span class="token operator">:</span> <span class="token string">'details'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">export</span><span class="token operator">:</span> <span class="token string">'export'</span><span class="token punctuation">,</span></span>
<span class="line">    status<span class="token operator">:</span> <span class="token string">'status'</span><span class="token punctuation">,</span></span>
<span class="line">    clean<span class="token operator">:</span> <span class="token string">'clean'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="国际化切换" tabindex="-1"><a class="header-anchor" href="#国际化切换"><span>国际化切换</span></a></h3>
<p>引入 useTranslation 钩子,然后提取 i18n 对象</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">   <span class="token keyword">import</span> <span class="token punctuation">{</span> useTranslation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-i18next"</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">const</span> <span class="token punctuation">{</span> i18n <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTranslation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用的函数中调用</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">   i18n<span class="token punctuation">.</span><span class="token function">changeLanguage</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 切换为英文</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="国际化使用" tabindex="-1"><a class="header-anchor" href="#国际化使用"><span>国际化使用</span></a></h3>
<p>这里配置分2种情况，一种是常规方式，一种是变量方式</p>
<h5 id="常规方式" tabindex="-1"><a class="header-anchor" href="#常规方式"><span>常规方式</span></a></h5>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">   <span class="token keyword">import</span> <span class="token punctuation">{</span> useTranslation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-i18next"</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTranslation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'system.create'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="变量方式" tabindex="-1"><a class="header-anchor" href="#变量方式"><span>变量方式</span></a></h5>
<ol>
<li>需要在翻译配置中定义变量</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line">   <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">      pleaseEnter<span class="token operator">:</span> <span class="token string">'请输入{{name}}'</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的“name”是个动态值</p>
<ol start="2">
<li>在组件中使用</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"></span>
<span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useTranslation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-i18next'</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useTranslation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token comment">/* 使用变量 */</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'pleaseEnter'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，当组件渲染时，它会使用name变量的值替换{{name}}占位符。</p>
</div></template>


