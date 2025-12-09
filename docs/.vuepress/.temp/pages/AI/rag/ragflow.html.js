import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/AI/rag/ragflow.html.vue"
const data = JSON.parse("{\"path\":\"/AI/rag/ragflow.html\",\"title\":\"RAG工作流\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"核心\",\"slug\":\"核心\",\"link\":\"#核心\",\"children\":[]},{\"level\":2,\"title\":\"流程\",\"slug\":\"流程\",\"link\":\"#流程\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"AI/rag/ragflow.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>对于大模型来讲，目前最常用的一个方法论就是RAG,通过RAG我们可以吧一些企业知识，一些私有化的知识库跟大模型融合在一起，来解决一些用户问题。</p>\\n</div>\\n<h2>核心</h2>\\n<p>RAG的核心是：知识库</p>\\n<h2>流程</h2>\\n<p></p>\\n<ol>\\n<li>需要一些文本，大量的文本其实是构建了我们的知识库</li>\\n<li>为了检索加速的效率，我们会让文本通过“切分”之后存储的向量数据库中去</li>\\n<li>在用户提问阶段，先提问，问题通过一个embbeding工具转换成一个向量，然后这个向量会去向量数据库中检索，检索到最相似的文本</li>\\n<li>检索出来的结果我们以Context表示，基于这个Context和用户的问题结合成一个prompt</li>\\n<li>最后把生成的prompt去给大模型处理并返回结果给用户</li>\\n</ol>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
