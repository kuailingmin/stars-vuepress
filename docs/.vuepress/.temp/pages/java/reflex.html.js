import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/reflex.html.vue"
const data = JSON.parse("{\"path\":\"/java/reflex.html\",\"title\":\"反射机制\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"java/reflex.md\",\"excerpt\":\"\\n<blockquote>\\n<p><em>Java反射机制</em> 是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种 <strong>动态</strong> 获取的信息以及动态调用对象的方法的功能称为java语言的 <strong>反射机制</strong>。</p>\\n</blockquote>\\n<h3>获取Class类对象的三种方式</h3>\\n<blockquote>\\n<p>万物皆对象，包括 <em>类</em> 也有对象，称为 <strong>类对象</strong>。要想获取类的信息首先要获取 <strong>类</strong>。</p>\\n</blockquote>\"}")
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
