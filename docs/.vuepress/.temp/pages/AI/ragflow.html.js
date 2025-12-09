import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/AI/ragflow.html.vue"
const data = JSON.parse("{\"path\":\"/AI/ragflow.html\",\"title\":\"RAG工作流\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"AI/ragflow.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>对于大模型来讲，目前最常用的一个方法论就是RAG,通过RAG我们可以吧一些企业知识，一些私有化的知识库跟大模型融合在一起，来解决一些用户问题。</p>\\n</div>\\n<h2>核心</h2>\\n<p>RAG的核心是：知识库</p>\\n<h2>流程</h2>\\n<p></p>\\n<ol>\\n<li>需要一些文本，大量的文本其实是构建了我们的知识库</li>\\n<li>为了检索加速的效率，我们会让文本通过“切分”之后存储的向量数据库中去</li>\\n<li>在用户提问阶段，先提问，问题通过一个embbeding工具转换成一个向量，然后这个向量会去向量数据库中检索，检索到最相似的文本</li>\\n<li>检索出来的结果我们以Context表示，基于这个Context和用户的问题结合成一个prompt</li>\\n<li>最后把生成的prompt去给大模型处理并返回结果给用户</li>\\n</ol>\"}")
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
