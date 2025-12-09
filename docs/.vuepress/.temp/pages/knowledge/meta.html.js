import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/meta.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/meta.html\",\"title\":\"meta标签\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"knowledge/meta.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>meta标签可能有些人并不关心，其实很多前端实现都需要它的帮助，尤其搜索引擎的场景中，下面总结多个开发中会使用到的技术点。<br>\\nmeta有个必须的属性content用于表示需要设置的项的值。<br>\\nmeta存在两个非必须的属性http-equiv和name, 用于表示要设置的项。</p>\\n</div>\\n<h2>http-equiv属性</h2>\\n<p>http-equiv一般设置的都是与http请求头相关的信息，设置的值会关联到http头部。也就是说浏览器在请求服务器获取html的时候，服务器会将html中设置的meta放在响应头中返回给浏览器。常见的类型比如content-type, expires, refresh, set-cookie, window-target, charset， pragma等等</p>\"}")
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
