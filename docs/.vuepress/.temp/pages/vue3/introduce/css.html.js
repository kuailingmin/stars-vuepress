import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/vue3/introduce/css.html.vue"
const data = JSON.parse("{\"path\":\"/vue3/introduce/css.html\",\"title\":\"style (黑科技)\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vue3/introduce/css.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>在前一阵子VueConf2021大会上，尤雨溪提到一个有趣的东西，那就是在Vue3.x版本加入了一个机制，通过js可以逻辑控制css style的变化。而且尤雨溪重点提到此功能利用浏览器原生的API去做的，性能消耗很小很小，几乎为零！在 SFC Style Variables 提案中介绍到， Vue SFC 样式提供了简单的 CSS 组合和封装，现在大多数现代浏览器都支持原生 CSS 变量，我们可以利用它轻松连接组件的状态和样式。那我们就看看它是如何实现的？</p>\\n</div>\"}")
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
