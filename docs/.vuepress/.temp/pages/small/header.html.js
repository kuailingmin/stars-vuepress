import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/small/header.html.vue"
const data = JSON.parse("{\"path\":\"/small/header.html\",\"title\":\"自动化页面路由\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"small/header.md\",\"excerpt\":\"<!--\\n * @Author: 蒯灵敏\\n * @Date: 2025-06-16 18:09:43\\n * @LastEditors: 蒯灵敏\\n * @LastEditTime: 2025-06-25 09:48:35\\n * @Description: 文件描述\\n * @FilePath: /stars-vuepress/docs/small/header.md\\n-->\\n<h1>自动化页面路由</h1>\\n<p>一般在微信小程序配置路由都是通过pages来配置，但是在uniStars框中使用另一种方式配置，这里我们用到uni官方社区提供的一个插件“@uni-helper/vite-plugin-uni-pages”，帮助我们完成这样的工作</p>\"}")
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
