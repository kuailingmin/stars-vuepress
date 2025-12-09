import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/plop/base.html.vue"
const data = JSON.parse("{\"path\":\"/plop/base.html\",\"title\":\"前端自动化工具\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Why Generators？\",\"slug\":\"why-generators\",\"link\":\"#why-generators\",\"children\":[]},{\"level\":2,\"title\":\"基本用法\",\"slug\":\"基本用法\",\"link\":\"#基本用法\",\"children\":[]},{\"level\":2,\"title\":\"运行\",\"slug\":\"运行\",\"link\":\"#运行\",\"children\":[]},{\"level\":2,\"title\":\"模版\",\"slug\":\"模版\",\"link\":\"#模版\",\"children\":[]},{\"level\":2,\"title\":\"扩展\",\"slug\":\"扩展\",\"link\":\"#扩展\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"plop/base.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>Plop是一个微生成器框架，之所以这样叫它 ，是因为它是一个可以允许你方便地创建具有一致性（通用性）的代码模板或文本文件的小工具。我们在代码中会经常创建具有同一种结构或模式的代码文件（路由、控制器、组件、辅助类等等）。这些结构和模式会经常演进，导致你无法很容易地在这些代码中找到可以代表当前最佳实践的代码去创建出一个新的类似模式的文件。这就是Plop要解决的问题。使用Plop，你可以很方便地使用代表最佳实践的文件模板去生成同样模式的新文件。使用Plop可以在命令行中方便地生成代码文件，这免去了我们在代码库中寻找和复制那些具有通用模式和结构的代码，这是创建新文件最简单的方法。</p>\\n</div>\"}")
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
