import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/hzero/branch.html.vue"
const data = JSON.parse("{\"path\":\"/hzero/branch.html\",\"title\":\"分支管理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"hzero/branch.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>软件的版本控制以及分支管理贯穿于整个软件产品的生命周期，日常的项目管理对于开发团队能否有节奏且顺利的交付软件也很重要。本分支管理和版本控制规范主要分为3个部分，即分支管理规范、版本号规范、需求与代码关联。其中，将阐述不同的分支管理模型，以及它们的优缺点和使用的场景；描述版本号控制方式——语义化版本；以及将需求与代码管理的必要性等。</p>\\n</div>\\n<h3>分支管理规范</h3>\\n<p>目前比较流行的分支管理模型有三个，即GitFlow、GitLabFlow、GitHubFlow。介绍这三种分支模型的原理，使用场景和优缺点等。</p>\"}")
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
