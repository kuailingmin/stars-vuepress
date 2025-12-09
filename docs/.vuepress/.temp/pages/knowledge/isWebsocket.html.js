import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/isWebsocket.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/isWebsocket.html\",\"title\":\"Http判断协议是不是websocket\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"knowledge/isWebsocket.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>WebSocket 之前，如果需要在客户端和服务之间双向通信，需要通过 HTTP 轮询来实现， HTTP 轮询分为轮询与长轮询，其中，轮询是指浏览器通过 JavaScript 启动一个定时器，然后以固定的间隔给服务器发请求，询问服务器有没有新消息，缺点：实时性不够，频繁的请求会给服务器带来极大的压力</p>\\n</div>\\n<p>HTTP协议是建立在TCP之上的，TCP协议本身就实现了全双工通信，但是 HTTP协议的请求-应答机制限制了全双工通信。 WebSocket连接建立之后，其实只是简单规定了一下</p>\"}")
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
