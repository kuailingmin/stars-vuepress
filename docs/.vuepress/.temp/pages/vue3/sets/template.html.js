import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/Vue3/sets/template.html.vue"
const data = JSON.parse("{\"path\":\"/Vue3/sets/template.html\",\"title\":\"模版命令快捷键\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"Vue3/sets/template.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>以前编写vue组件的时候，大家都需要一行一行代码写，现在有一种快捷创建vue组件模版的方式</p>\\n</div>\\n\"}")
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
