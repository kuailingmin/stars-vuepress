import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/react/obsolete.html.vue"
const data = JSON.parse("{\"path\":\"/react/obsolete.html\",\"title\":\"React Hooks 过时的闭包\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"react/obsolete.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<ol>\\n<li>Hooks 简化了React 功能组件内部状态和副作用的管理。此外，可以将重复的逻辑提取到自定义挂钩中，以便在整个应用程序中重用。</li>\\n<li>Hook 严重依赖 JavaScript闭包。这就是钩子如此富有表现力和简单的原因。但是闭包有时很棘手，使用钩子时可能会遇到的一个问题是过时的闭包。而且可能很难解决！让我们从提炼过时的闭包开始。然后你会看到陈旧的闭包如何影响 React 钩子，以及如何解决这个问题。</li>\\n</ol>\\n</div>\"}")
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
