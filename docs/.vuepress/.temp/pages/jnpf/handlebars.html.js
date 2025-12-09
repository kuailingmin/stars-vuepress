import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/jnpf/handlebars.html.vue"
const data = JSON.parse("{\"path\":\"/jnpf/handlebars.html\",\"title\":\"handlebars\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"jnpf/handlebars.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<ol>\\n<li>Handlebars 提供了必要的功能，使你可以高效地构建语义化模板。</li>\\n<li>Handlebars 与 Mustache 模板基本兼容。大多数情况下，您可以在使用 Handlebars 的同时继续使用您当前的模板。</li>\\n<li>Handlebars 会将模板编译为 JavaScript 函数。这使得 Handlebars 的执行速度比其他大多数模板引擎都要快。</li>\\n</ol>\\n</div>\\n<h2>基本用法</h2>\"}")
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
