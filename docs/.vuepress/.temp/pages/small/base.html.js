import comp from "/Users/kuailingmin/Desktop/old work/stars-vuepress/docs/.vuepress/.temp/pages/small/base.html.vue"
const data = JSON.parse("{\"path\":\"/small/base.html\",\"title\":\"小程序生态\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"为什么要用微前端\",\"slug\":\"为什么要用微前端\",\"link\":\"#为什么要用微前端\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"small/base.md\",\"excerpt\":\"<!--\\n * @Author: 蒯灵敏\\n * @Date: 2025-06-16 16:59:53\\n * @LastEditors: 蒯灵敏\\n * @LastEditTime: 2025-06-16 17:00:16\\n * @Description: 文件描述\\n * @FilePath: /stars-vuepress/docs/small/base.md\\n-->\\n<h1>小程序生态</h1>\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>微前端，是将单体化的前端系统拆分成多个小型的前端应用，在同一个页面上协同工作。换言之，微前端是一种前端架构模式，通过拆分前端系统为独立的微前端应用来解决大型应用的复杂性问题。</p>\\n</div>\"}")
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
