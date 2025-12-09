<template><div><!--
 * @Author: 蒯灵敏
 * @Date: 2025-06-16 18:09:43
 * @LastEditors: 蒯灵敏
 * @LastEditTime: 2025-06-25 09:48:35
 * @Description: 文件描述
 * @FilePath: /stars-vuepress/docs/small/header.md
-->
<h1 id="自动化页面路由" tabindex="-1"><a class="header-anchor" href="#自动化页面路由"><span>自动化页面路由</span></a></h1>
<p>一般在微信小程序配置路由都是通过pages来配置，但是在uniStars框中使用另一种方式配置，这里我们用到uni官方社区提供的一个插件“@uni-helper/vite-plugin-uni-pages”，帮助我们完成这样的工作</p>
<h4 id="安装依赖包" tabindex="-1"><a class="header-anchor" href="#安装依赖包"><span>安装依赖包</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">pnpm</span> i @uni-helper/vite-plugin-uni-pages <span class="token parameter variable">-D</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="vite-config-ts配置" tabindex="-1"><a class="header-anchor" href="#vite-config-ts配置"><span>vite.config.ts配置</span></a></h4>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UniPages <span class="token keyword">from</span> <span class="token string">'@uni-helper/vite-plugin-uni-pages'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">           exclude<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'**/components/**/**.*'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">           routeBlockLang<span class="token operator">:</span> <span class="token string">'json5'</span><span class="token punctuation">,</span> </span>
<span class="line">           dts<span class="token operator">:</span> <span class="token string">'src/types/uni-pages.d.ts'</span> <span class="token comment">//接受布尔值或与相对项目根目录的路径</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="页面使用" tabindex="-1"><a class="header-anchor" href="#页面使用"><span>页面使用</span></a></h4>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code class="language-vue"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>json5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  {</span>
<span class="line">    style: {</span>
<span class="line">      navigationBarTitleText: '首页',</span>
<span class="line">      navigationBarBackgroundColor: '#ddd'</span>
<span class="line">    },</span>
<span class="line">  }</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">></span></span></span>
<span class="line">  </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/static/logo.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-area<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uv-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>确定<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uv-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'Hello2'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> value <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token operator">></span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">handleConfirm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json5 line-numbers-mode" data-highlighter="prismjs" data-ext="json5"><pre v-pre><code class="language-json5"><span class="line">&lt;route lang=<span class="token string">"json5"</span>></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property unquoted">style</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property unquoted">navigationBarTitleText</span><span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property unquoted">navigationBarBackgroundColor</span><span class="token operator">:</span> <span class="token string">'#ddd'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">&lt;/route></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件自定义块语言使用的是json5,还包括json | yaml | yml</p>
<h4 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h4>
<ol>
<li>onBeforeLoadUserConfig</li>
</ol>
<ul>
<li>触发时机：加载用户配置文件（如 pages.config.ts）之前</li>
<li>用途：修改或扩展配置文件的加载行为</li>
<li>参数：无</li>
<li>返回值：void</li>
</ul>
<h5 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例:</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onBeforeLoadUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'即将加载用户配置'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 可在此处动态生成配置文件路径</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>onAfterLoadUserConfig</li>
</ol>
<ul>
<li>触发时机：成功加载用户配置文件之后</li>
<li>用途：修改已加载的配置对象</li>
<li>参数：config: UserConfig（已解析的配置对象）</li>
<li>返回值：可返回修改后的 UserConfig 对象（可选）</li>
</ul>
<h5 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例：</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onAfterLoadUserConfig</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    config<span class="token punctuation">.</span>pages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/added-page'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 动态添加页面</span></span>
<span class="line">    <span class="token keyword">return</span> config<span class="token punctuation">;</span> <span class="token comment">// 返回修改后的配置</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>onBeforeScanPages</li>
</ol>
<ul>
<li>触发时机：扫描页面目录（如 src/pages）之前</li>
<li>用途：修改扫描参数（如目录路径、过滤规则）</li>
<li>参数：options: ScanOptions（扫描配置）</li>
<li>返回值：可返回修改后的 ScanOptions 对象</li>
</ul>
<h5 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例：</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onBeforeScanPages</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    options<span class="token punctuation">.</span>dir <span class="token operator">=</span> <span class="token string">'src/custom-pages'</span><span class="token punctuation">;</span> <span class="token comment">// 修改扫描目录</span></span>
<span class="line">    options<span class="token punctuation">.</span>exclude <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'**/test/**'</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 排除测试页面</span></span>
<span class="line">    <span class="token keyword">return</span> options<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>onAfterScanPages</li>
</ol>
<ul>
<li>触发时机：完成页面目录扫描之后</li>
<li>用途：修改扫描到的页面数据</li>
<li>参数：pages: PageConfig[]（扫描结果数组）</li>
<li>返回值：可返回修改后的 PageConfig[]</li>
</ul>
<h5 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例：</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onAfterScanPages</span><span class="token punctuation">(</span><span class="token parameter">pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 动态添加虚拟页面</span></span>
<span class="line">    pages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/virtual-page'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'page'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">navigationBarTitleText</span><span class="token operator">:</span> <span class="token string">'虚拟页'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> pages<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>onBeforeMergePageMetaData</li>
</ol>
<ul>
<li>触发时机：合并页面元数据（如 .vue 文件中的 route 块）之前</li>
<li>用途：修改待合并的元数据</li>
<li>参数：meta: PageMetaData（待合并的元数据对象）</li>
<li>返回值：可返回修改后的 PageMetaData</li>
</ul>
<h5 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4"><span>示例：</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onBeforeMergePageMetaData</span><span class="token punctuation">(</span><span class="token parameter">meta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 为所有页面添加共享元数据</span></span>
<span class="line">    meta<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>meta<span class="token punctuation">.</span>style<span class="token punctuation">,</span> <span class="token literal-property property">sharedKey</span><span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> meta<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>onAfterMergePageMetaData</li>
</ol>
<ul>
<li>触发时机：完成元数据合并之后</li>
<li>用途：访问或修改最终生成的页面配置</li>
<li>参数：pages: PageConfig[]（合并后的完整页面配置）</li>
<li>返回值：可返回修改后的 PageConfig[]</li>
</ul>
<h5 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5"><span>示例：</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onAfterMergePageMetaData</span><span class="token punctuation">(</span><span class="token parameter">pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 验证配置或添加全局逻辑</span></span>
<span class="line">    pages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">page</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>page<span class="token punctuation">.</span>style<span class="token punctuation">)</span> page<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      page<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">'#f5f5f5'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> pages<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>onBeforeWriteFile</li>
</ol>
<ul>
<li>触发时机：将 pages.json 写入磁盘之前</li>
<li>用途：修改文件内容或路径</li>
<li>参数：file: { path: string; content: string }（文件信息）</li>
<li>返回值：可返回修改后的文件对象，或 false 阻止写入</li>
</ul>
<h5 id="示例-6" tabindex="-1"><a class="header-anchor" href="#示例-6"><span>示例：</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onBeforeWriteFile</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 修改文件内容</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">'pages.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      json<span class="token punctuation">.</span>globalStyle <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>json<span class="token punctuation">.</span>globalStyle<span class="token punctuation">,</span> <span class="token literal-property property">newKey</span><span class="token operator">:</span> <span class="token string">'value'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      file<span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> file<span class="token punctuation">;</span> <span class="token comment">// 返回修改后的文件对象</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>onAfterWriteFile</li>
</ol>
<ul>
<li>触发时机：成功写入文件之后</li>
<li>用途：执行后处理操作（如通知、清理）</li>
<li>参数：file: { path: string; content: string }（已写入的文件信息）</li>
<li>返回值：void</li>
</ul>
<h4 id="示例-7" tabindex="-1"><a class="header-anchor" href="#示例-7"><span>示例:</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">onAfterWriteFile</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">文件已写入: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 触发其他构建流程</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="完整示例配置" tabindex="-1"><a class="header-anchor" href="#完整示例配置"><span>完整示例配置</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// vite.config.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> UniPages <span class="token keyword">from</span> <span class="token string">'@uni-helper/vite-plugin-uni-pages'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">UniPages</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">onBeforeLoadUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'配置加载开始'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">onAfterLoadUserConfig</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">,</span> <span class="token literal-property property">globalStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'App'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">onAfterScanPages</span><span class="token punctuation">(</span><span class="token parameter">pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> pages<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">page</span> <span class="token operator">=></span> <span class="token operator">!</span>page<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'hidden'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">onAfterMergePageMetaData</span><span class="token punctuation">(</span><span class="token parameter">pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> pages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">page</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token operator">...</span>page<span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>page<span class="token punctuation">.</span>style<span class="token punctuation">,</span> <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'dark'</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">onBeforeWriteFile</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'pages.json'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          file<span class="token punctuation">.</span>content <span class="token operator">+=</span> <span class="token string">'\n// Generated by custom hook'</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> file<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


