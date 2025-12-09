<template><div><h1 id="lov-组件" tabindex="-1"><a class="header-anchor" href="#lov-组件"><span>LOV 组件</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>记录汉得LOV组件库的使用方式</p>
</div>
<h3 id="值集配置" tabindex="-1"><a class="header-anchor" href="#值集配置"><span>值集配置</span></a></h3>
<p>LOV组件的数据来源是来自值集配置</p>
<p>在值集配置中分为 1. 后端数据 2. 自定义数据 这二种</p>
<p>路径：开发管理 -&gt; 值集管理 -&gt; 值集配置    界面如下：</p>
<p><img src="@source/images/lov1.png" alt=""></p>
<p>值集类型：</p>
<ol>
<li>独立值集</li>
<li>自定义sql</li>
<li>URL</li>
</ol>
<p><img src="@source/images/lov2.png" alt="">
具体参考<a href="https://open.hand-china.com/document-center/doc/component/163/15280?doc_id=128462&amp;doc_code=29022#1.%E7%8B%AC%E7%AB%8B%E5%80%BC%E9%9B%86" target="_blank" rel="noopener noreferrer">官方文档</a></p>
<h3 id="新建值集" tabindex="-1"><a class="header-anchor" href="#新建值集"><span>新建值集</span></a></h3>
<p>点击右上角的“新建”按钮</p>
<p><img src="@source/images/lov3.png" alt=""></p>
<p>在新增过程中，我们选择值集类型基本为“URL”,这个时候会多出一些必填参数：</p>
<p><img src="@source/images/lov4.png" alt=""></p>
<ol>
<li>目路由名：这里根据后端服务名来定，比如：调用接口来自“idea-basedata”,则目路由名idea-basedata</li>
<li>查询URL：后端接口地址</li>
<li>请求方式：接口网络请求的方法</li>
<li>值集编码：为了防止编码定义冲突，需要定义一个公式：“接口服务名” + “.” + “接口名” （BUSICONFIG.PRODUCTTYPE_QUERYBYSTATUS）</li>
</ol>
<font color=red face="黑体">注：接口名层级会很多，已下划线分割。整个值集编码全大写,尽量少精简命名</font><p>上面信息填写好保存即可完成值集的创建</p>
<h3 id="使用值集" tabindex="-1"><a class="header-anchor" href="#使用值集"><span>使用值集</span></a></h3>
<div class="language-JS line-numbers-mode" data-highlighter="prismjs" data-ext="JS"><pre v-pre><code class="language-JS"><span class="line">ds = new DataSet({</span>
<span class="line">    primaryKey: 'code',</span>
<span class="line">    autoCreate: true,</span>
<span class="line">    fields: [</span>
<span class="line">      {</span>
<span class="line">        name: 'code',</span>
<span class="line">        type: 'object',</span>
<span class="line highlighted">        lovCode: 'LOV_MOCK_CODE',</span>
<span class="line">        multiple: true,</span>
<span class="line">        required: true,</span>
<span class="line">      },</span>
<span class="line">    ],</span>
<span class="line">    cacheSelection: true,</span>
<span class="line">    selection: 'multiple',</span>
<span class="line">    events: {</span>
<span class="line">      update: handleDataSetChange,</span>
<span class="line">    },</span>
<span class="line">});</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据官方给出的代码实例，其中有一个参数“lovCode”，这个就是把创建的值集和组件做绑定</p>
</div></template>


