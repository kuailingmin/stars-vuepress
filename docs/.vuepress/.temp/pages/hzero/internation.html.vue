<template><div><h1 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化"><span>国际化</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>国际化采用统一的命名规范，开发者在开发具体功能的时候要按照语言 code 定义描述，不能直接写死描述,下面注意介绍，
在使用汉德这套国际化方案做的过程中，整体感觉比较方便，之前的前端国际化都会工程下定义多国语音文件去配置，也是在前端工程内一起打包的，这样弊端是增加前端包体积，而汉德使用后端配置方式录入到数据库，经过网络请求异步拿到国际化配置数据。</p>
</div>
<p>先看一个简单例子</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">//  第一步引入依赖</span></span>
<span class="line"><span class="token keyword">import</span> intl <span class="token keyword">from</span> <span class="token string">'utils/intl'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 第二部通过get方法获取系统配置好的国际化"code"</span></span>
<span class="line">intl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'hzero.common.button.delete'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">'删除'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里“hzero.common.button.delete”是一个国际化code，它的生成规则完全是由固定好的公式拼接而成！</p>
<h3 id="code公式" tabindex="-1"><a class="header-anchor" href="#code公式"><span>Code公式</span></a></h3>
<p>code = “模版代码” + “ . ”+ ”代码“</p>
<p>通过上面例子来分析一下：</p>
<ul>
<li>模版代码：“hzero.common”</li>
<li>代码：“button.delete”</li>
</ul>
<p>从公式上看由两部分组成，其中代码的规则是根据&quot;前端组件名&quot; + “ . ” + 自定义名来命名，打比方：表单里显示名称，则代码是form.name</p>
<table>
<thead>
<tr>
<th>前端组件</th>
<th style="text-align:right">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>table</td>
<td style="text-align:right">表格</td>
</tr>
<tr>
<td>form</td>
<td style="text-align:right">表单</td>
</tr>
<tr>
<td>input</td>
<td style="text-align:right">输入框</td>
</tr>
<tr>
<td>title</td>
<td style="text-align:right">标题</td>
</tr>
<tr>
<td>view</td>
<td style="text-align:right">如果不在组件范围内，则直接提升之页面级</td>
</tr>
<tr>
<td>。。。</td>
<td style="text-align:right">下面不一一列举了，根据实际情况而定</td>
</tr>
</tbody>
</table>
<h3 id="入口注入依赖" tabindex="-1"><a class="header-anchor" href="#入口注入依赖"><span>入口注入依赖</span></a></h3>
<p>这里要注意我们在整个页面的总入口处需要配置依赖，否则国际化无效</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">export default formatterCollections({</span>
<span class="line">  code: ['hzero.common'],</span>
<span class="line">})(attribute);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


