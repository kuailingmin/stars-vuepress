import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/vuex/index.html.vue"
const data = JSON.parse("{\"path\":\"/vuex/\",\"title\":\"Vuex4 版本开发\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"vuex/README.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>在Vuex3版本中给我们提供了一个很好的东西，就是“map”对象，其中提供了mapState、mapGetters、mapMutations、mapActions，\\n让我们在开发过程中很方便的实现数据和视图之间的联系,而如今，随着vue3.x版本发布，vuex也升级到4版本，随之而来的就是map对象该如何使用?</p>\\n</div>\\n\"}")
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
