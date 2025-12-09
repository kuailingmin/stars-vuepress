import{_ as n,c as s,a,o as i}from"./app-D755Bb6P.js";const l={};function r(d,e){return i(),s("div",null,[...e[0]||(e[0]=[a(`<h1 id="render-方法" tabindex="-1"><a class="header-anchor" href="#render-方法"><span>render 方法</span></a></h1><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render"><span>render</span></a></h3><div class="hint-container tip"><p class="hint-container-title">说明</p><p>在使用 render 方法之前需引入相应的方法。</p></div><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">import { dateTimeRender, enableRender } from &#39;utils/renderer&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="enablerender" tabindex="-1"><a class="header-anchor" href="#enablerender"><span>enableRender</span></a></h3><p>返回 启用/禁用 对应的多语言，并加上状态标记。</p><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const columns = [</span>
<span class="line">  ...</span>
<span class="line">  {</span>
<span class="line">    title: intl.get(&#39;hzero.common.status&#39;).d(&#39;状态&#39;),</span>
<span class="line">    dataIndex: &#39;enabledFlag&#39;,</span>
<span class="line">    width: 80,</span>
<span class="line">    render: enableRender</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yesornorender" tabindex="-1"><a class="header-anchor" href="#yesornorender"><span>yesOrNoRender</span></a></h3><p>返回 是/否 多语言 并加上对应的状态标记。</p><ul><li>0 返回 no(多语言)</li><li>1 返回 yes(多语言)</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const columns = [</span>
<span class="line">  ...</span>
<span class="line">  {</span>
<span class="line">    title: intl.get(&#39;hfile.storage.model.storage.defaultFlag&#39;).d(&#39;默认&#39;),</span>
<span class="line">    dataIndex: &#39;defaultFlag&#39;,</span>
<span class="line">    width: 100,</span>
<span class="line">    render: yesOrNoRender,</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="totalrender" tabindex="-1"><a class="header-anchor" href="#totalrender"><span>totalRender</span></a></h3><p>用于显示数据总量和当前数据顺序</p><ul><li>0 返回 no(多语言)</li><li>1 返回 yes(多语言)</li></ul><div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre><code class="language-JS"><span class="line">const columns = [</span>
<span class="line">  ...</span>
<span class="line">  {</span>
<span class="line">    title: intl.get(&#39;hfile.storage.model.storage.defaultFlag&#39;).d(&#39;默认&#39;),</span>
<span class="line">    dataIndex: &#39;defaultFlag&#39;,</span>
<span class="line">    width: 100,</span>
<span class="line">    render: yesOrNoRender,</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)])])}const t=n(l,[["render",r],["__file","renders.html.vue"]]),p=JSON.parse(`{"path":"/hzero/renders.html","title":"render 方法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1722322323000,"contributors":[{"name":"前端艺术者","username":"","email":"kuailingmin@126.com","commits":1}],"changelog":[{"hash":"444e0c9033fc5359522e4a4695075e0e365d6291","time":1722322323000,"email":"kuailingmin@126.com","author":"前端艺术者","message":"新增内容"}]},"filePathRelative":"hzero/renders.md","excerpt":"\\n<h3>render</h3>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">说明</p>\\n<p>在使用 render 方法之前需引入相应的方法。</p>\\n</div>\\n<div class=\\"language-JS line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"JS\\"><pre><code class=\\"language-JS\\"><span class=\\"line\\">import { dateTimeRender, enableRender } from 'utils/renderer'</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}`);export{t as comp,p as data};
