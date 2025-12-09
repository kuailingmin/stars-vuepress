import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/react/render.html.vue"
const data = JSON.parse("{\"path\":\"/react/render.html\",\"title\":\"re-render原理及优化\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"react/render.md\",\"excerpt\":\"\\n<p>对于函数组件的 re-render，大致分为以下三种情况：</p>\\n<ul>\\n<li>组件本身使用 useState 或 useReducer 更新，引起的 re-render</li>\\n<li>父组件更新引起的 re-render</li>\\n<li>组件本身使用了 useContext，context 更新引起的 re-render</li>\\n</ul>\\n<h2>1. 使用 useState 或 useReducer 更新，引起的 re-render</h2>\\n<h3>常规使用</h3>\\n<p>以计数组件为例，如下每次点击 add，都会打印 'counter render'，表示引起了 re-render</p>\"}")
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
