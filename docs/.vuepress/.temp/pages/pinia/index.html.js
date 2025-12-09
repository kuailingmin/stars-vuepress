import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/pinia/index.html.vue"
const data = JSON.parse("{\"path\":\"/pinia/\",\"title\":\"pinia\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":3,\"title\":\"为什么要使用 Pinia？\",\"slug\":\"为什么要使用-pinia\",\"link\":\"#为什么要使用-pinia\",\"children\":[]},{\"level\":3,\"title\":\"基本示例\",\"slug\":\"基本示例\",\"link\":\"#基本示例\",\"children\":[]},{\"level\":3,\"title\":\"一个更现实的例子\",\"slug\":\"一个更现实的例子\",\"link\":\"#一个更现实的例子\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"pinia/README.md\",\"excerpt\":\"\\n<h3>介绍</h3>\\n<p>Pinia最初是在 2019 年 11 月左右重新设计使用Composition API的 Vue Store 外观的实验。从那时起，最初的原则仍然相同，但 Pinia 适用于 Vue 2 和 Vue 3 ，并且不需要你使用组合 API。除了安装和SSR之外，两者的 API 都是相同的，并且这些文档针对 Vue 3 ，并在必要时提供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读！</p>\\n<p>为什么起名“Pinia”？Pinia（发音为/piːnjʌ/，如英语中的“peenya”）是最接近piña（西班牙语中的菠萝）的词，它是一个有效的包名称。菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。与Stores类似，每一家都是独立诞生的，但最终都是相互联系的。它也是一种美味的热带水果，原产于南美洲。</p>\"}")
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
