import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/jnpf/base.html.vue"
const data = JSON.parse("{\"path\":\"/jnpf/base.html\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"jnpf/base.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>JNPF快速开发框架是一个可复用的设计构件，使用JNPF的编程人员可以在一个通用功能已经实现的基础上开始具体的系统开发；\\n简单来讲，软件开发框架可以理解为我们盖楼房时，用梁+柱子+承重墙做起来的钢筋混凝土结构框架。而实现的软件功能，也就像在这个快速开发框架结构中所要实现的不同类型、功能的房子，比如停车场、商场、酒店等；\\nJNPF已经是一套成熟的快速开发框架，并在不断升级更新；\\nJNPF快速开发能提高企业的竞争能力，包括降低开发成本、提高产品质量、改善客户满意程度、控制开发进度等。</p>\\n</div>\"}")
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
