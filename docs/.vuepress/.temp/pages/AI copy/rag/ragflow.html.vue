<template><div><h1 id="rag工作流" tabindex="-1"><a class="header-anchor" href="#rag工作流"><span>RAG工作流</span></a></h1>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>对于大模型来讲，目前最常用的一个方法论就是RAG,通过RAG我们可以吧一些企业知识，一些私有化的知识库跟大模型融合在一起，来解决一些用户问题。</p>
</div>
<h2 id="核心" tabindex="-1"><a class="header-anchor" href="#核心"><span>核心</span></a></h2>
<p>RAG的核心是：知识库</p>
<h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h2>
<p><img src="@source/images/RAGFlow.png" alt=""></p>
<ol>
<li>需要一些文本，大量的文本其实是构建了我们的知识库</li>
<li>为了检索加速的效率，我们会让文本通过“切分”之后存储的向量数据库中去</li>
<li>在用户提问阶段，先提问，问题通过一个embbeding工具转换成一个向量，然后这个向量会去向量数据库中检索，检索到最相似的文本</li>
<li>检索出来的结果我们以Context表示，基于这个Context和用户的问题结合成一个prompt</li>
<li>最后把生成的prompt去给大模型处理并返回结果给用户</li>
</ol>
</div></template>


