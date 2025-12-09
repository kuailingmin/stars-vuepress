<template><div><h1 id="usejump" tabindex="-1"><a class="header-anchor" href="#usejump"><span>useJump</span></a></h1>
<p>用于乾坤系统之间的页面跳转。</p>
<h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示"><span>代码演示</span></a></h2>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useJump <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'stars-use'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token comment">// 第一种</span></span>
<span class="line">    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line">    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'http://xxx.com?user'</span> <span class="token operator">+</span> user</span>
<span class="line">    <span class="token function">useJump</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span>title<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   <span class="token comment">// 第二种</span></span>
<span class="line">    <span class="token function">useJump</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'title'</span><span class="token punctuation">,</span><span class="token string">'url'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置默认值" tabindex="-1"><a class="header-anchor" href="#设置默认值"><span>设置默认值</span></a></h3>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2>
<h3 id="类型定义" tabindex="-1"><a class="header-anchor" href="#类型定义"><span>类型定义</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code class="language-typescript"><span class="line"><span class="token keyword">function</span> <span class="token function">useJump</span><span class="token punctuation">(</span>state<span class="token operator">:</span>object<span class="token punctuation">,</span>title<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>url<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>state</td>
<td>状态对象是一个JavaScript对象，它与pushState()创建的新历史记录条目相关联</td>
<td>object</td>
<td>{}</td>
</tr>
<tr>
<td>title</td>
<td>当前大多数浏览器都忽略此参数，尽管将来可能会使用它,在此处传递空字符串应该可以防止将来对方法的更改</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>url</td>
<td>新历史记录条目的URL由此参数指定</td>
<td>string</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


