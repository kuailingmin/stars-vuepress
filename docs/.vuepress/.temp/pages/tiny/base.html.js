import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/tiny/base.html.vue"
const data = JSON.parse("{\"path\":\"/tiny/base.html\",\"title\":\"微前端架构分析\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"tiny/base.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>微前端，是将单体化的前端系统拆分成多个小型的前端应用，在同一个页面上协同工作。换言之，微前端是一种前端架构模式，通过拆分前端系统为独立的微前端应用来解决大型应用的复杂性问题。</p>\\n</div>\\n<h3>为什么要用微前端</h3>\\n<ol>\\n<li>独立开发：每个团队负责自己的微前端应用，独立开发、技术栈不受限制。</li>\\n<li>独立部署：每个微前端应用都可以独立部署，实现独立模块更新且不会影响到主体</li>\\n<li>独立测试：每个微前端应用都可以独立测试，可以快速发现问题</li>\\n<li>独立迭代：每个微前端应用都可以独立迭代，不影响主体，提升系统可维护性和升级效率</li>\\n</ol>\"}")
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
