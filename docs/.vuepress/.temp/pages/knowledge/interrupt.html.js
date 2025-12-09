import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/interrupt.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/interrupt.html\",\"title\":\"如何中断已发出去的请求\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"knowledge/interrupt.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>虽然使用场景很少，但是还是要记录一下知识点，万一哪天需要呢？！</p>\\n</div>\\n<h3>AbortController</h3>\\n<p>一个控制器对象，可以根据需要终止一个或多个Web请求</p>\\n<ul>\\n<li>AbortController()：AbortController()构造函数创建一个新的 AbortController 对象实例</li>\\n<li>signal：signal 属性返回一个 AbortSignal 对象实例，它可以用来 with/about 一个Web(网络)请求</li>\\n<li>abort()：终止一个尚未完成的Web(网络)请求，它能够终止 fetch 请求，任何响应Body的消费者和流</li>\\n</ul>\"}")
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
