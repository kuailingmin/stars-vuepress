import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/java/index.html.vue"
const data = JSON.parse("{\"path\":\"/java/\",\"title\":\"Java\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"java/README.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>好久没开发了，那都是10年前的事了</p>\\n</div>\\n\"}")
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
