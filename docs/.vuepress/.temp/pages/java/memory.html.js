import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/memory.html.vue"
const data = JSON.parse("{\"path\":\"/java/memory.html\",\"title\":\"Java内存\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"java/memory.md\",\"excerpt\":\"\\n<h3>Java内存模型与原子性、可见性、有序性</h3>\\n<p></p>\\n<h3>一、Java内存模型</h3>\\n<p><em>Java Memory Modle</em>，简称 <em>JMM</em>，中文名称 <strong>Java内存模型</strong>，它是一个抽象的概念，用来描述或者规范访问内存变量的方式。因为各中计算机的操作系统和硬件不同，方式机制也可能不同，Java内存模型用于屏蔽（适配）各种差异，以此来达到访问各个平台的一致的效果。这也是Java夸平台的重要原因之一。</p>\\n<p><strong>主内存：</strong> Java内存规定了所有变量都存储在主内存（Main Memory）中，各个线程又有自己的本地内存（工作内存），本地内存保存着主内存中部分变量。具体访问方式如下：</p>\"}")
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
