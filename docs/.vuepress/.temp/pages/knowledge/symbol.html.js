import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/symbol.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/symbol.html\",\"title\":\"symbol\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"knowledge/symbol.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">介绍</p>\\n<p>symbol是一个ES6标准种新增的一种基本数据类型，在JavaScript中，共有七种基本数据类型：string、number、object、boolean、null、undefined、symbol。并且除了null和undefined之外，每个基本类型都有其包装对象。</p>\\n<p>symbol是通过Symbol()函数生成，每一个symbol都是唯一的。现在对象属性名分为了以下两种：一种就是原本的字符串类型，一种就是symbol类型</p>\\n</div>\"}")
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
