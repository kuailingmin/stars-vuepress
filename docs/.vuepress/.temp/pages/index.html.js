import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"footer\":\"作者 ：  蒯灵敏\"},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"README.md\"}")
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
