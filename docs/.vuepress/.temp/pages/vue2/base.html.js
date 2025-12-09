import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/vue2/base.html.vue"
const data = JSON.parse("{\"path\":\"/vue2/base.html\",\"title\":\"基本知识点\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"vue2/base.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>总结一些vue2版本的知识点</p>\\n</div>\\n<h2>1.Vue的核心是什么</h2>\\n<p>Vue是一套构建用户界面的渐进式自底向上增量开发的MVVM框架，vue的核心只关注视图层，</p>\\n<p>核心思想：</p>\\n<p>数据驱动（视图的内容随着数据的改变而改变）</p>\\n<p>组件化（可以增加代码的复用性，可维护性，可测试性，提高开发效率，方便重复使用，体现了高内聚低耦合）</p>\\n<h2>2.简述vue的理解</h2>\\n<p>Vue是一套构建用户界面的渐进式的自底向上增量开发的MVVM框架，核心是关注视图层，vue的核心是为了解决数据的绑定问题，为了开发大型单页面应用和组件化，所以vue的核心思想是数据驱动和组件化，这里也说一下MVVM思想，MVVM思想是 模型  视图  vm是v和m连接的桥梁，当模型层数据修改时，VM层会检测到，并通知视图层进行相应修改</p>\"}")
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
