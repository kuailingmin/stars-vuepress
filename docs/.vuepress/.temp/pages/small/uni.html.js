import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/small/uni.html.vue"
const data = JSON.parse("{\"path\":\"/small/uni.html\",\"title\":\"小程序框架介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"small/uni.md\",\"excerpt\":\"<!--\\n * @Author: 蒯灵敏\\n * @Date: 2025-06-16 16:59:53\\n * @LastEditors: 蒯灵敏\\n * @LastEditTime: 2025-06-21 15:05:02\\n * @Description: 文件描述\\n * @FilePath: /stars-vuepress/docs/small/uni.md\\n-->\\n<h1>小程序框架介绍</h1>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>uniStars由最初始的官方cli脚手架模板生成,基于vue3 + Ts开发，内置了全局数据管理、请求封装、路由拦截等等，无需HBuilderX做开发，</p>\\n</div>\"}")
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
