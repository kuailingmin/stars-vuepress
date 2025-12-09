import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/ssr.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/ssr.html\",\"title\":\"SSR服务端渲染\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"knowledge/ssr.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>要做服务端渲染，就必然需要一个实时在线的后台服务（通常是基于 Node.js 的服务）用来承载页面请求，那么：</p>\\n<p>1、需要服务器的计算资源和公网流量来部署这套服务，并且消耗的资源与页面的访问量成正相关，当页面的访问量突增时，渲染服务也需要进行扩容；</p>\\n<p>2、服务端只能部署在有限的几个地域，对于距离服务端较远的用户而言，加载速度跟静态资源的 CDN 相比，慢了一个数量级（通常是 1-5ms VS 50-100+ms）；</p>\\n<p>3、日常也存在传统服务端同样的运维、监控告警等方面的负担，团队需要额外的人力来开发和维护。</p>\\n</div>\"}")
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
