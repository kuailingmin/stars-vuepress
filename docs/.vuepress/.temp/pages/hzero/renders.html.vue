<template><div><h1 id="render-方法" tabindex="-1"><a class="header-anchor" href="#render-方法"><span>render 方法</span></a></h1>
<h3 id="render" tabindex="-1"><a class="header-anchor" href="#render"><span>render</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>在使用 render 方法之前需引入相应的方法。</p>
</div>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">import { dateTimeRender, enableRender } from 'utils/renderer'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="enablerender" tabindex="-1"><a class="header-anchor" href="#enablerender"><span>enableRender</span></a></h3>
<p>返回 启用/禁用 对应的多语言，并加上状态标记。</p>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">const columns = [</span>
<span class="line">  ...</span>
<span class="line">  {</span>
<span class="line">    title: intl.get('hzero.common.status').d('状态'),</span>
<span class="line">    dataIndex: 'enabledFlag',</span>
<span class="line">    width: 80,</span>
<span class="line">    render: enableRender</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yesornorender" tabindex="-1"><a class="header-anchor" href="#yesornorender"><span>yesOrNoRender</span></a></h3>
<p>返回 是/否 多语言 并加上对应的状态标记。</p>
<ul>
<li>0 返回 no(多语言)</li>
<li>1 返回 yes(多语言)</li>
</ul>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">const columns = [</span>
<span class="line">  ...</span>
<span class="line">  {</span>
<span class="line">    title: intl.get('hfile.storage.model.storage.defaultFlag').d('默认'),</span>
<span class="line">    dataIndex: 'defaultFlag',</span>
<span class="line">    width: 100,</span>
<span class="line">    render: yesOrNoRender,</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="totalrender" tabindex="-1"><a class="header-anchor" href="#totalrender"><span>totalRender</span></a></h3>
<p>用于显示数据总量和当前数据顺序</p>
<ul>
<li>0 返回 no(多语言)</li>
<li>1 返回 yes(多语言)</li>
</ul>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">const columns = [</span>
<span class="line">  ...</span>
<span class="line">  {</span>
<span class="line">    title: intl.get('hfile.storage.model.storage.defaultFlag').d('默认'),</span>
<span class="line">    dataIndex: 'defaultFlag',</span>
<span class="line">    width: 100,</span>
<span class="line">    render: yesOrNoRender,</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


