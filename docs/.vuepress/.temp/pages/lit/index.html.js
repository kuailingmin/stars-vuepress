import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/lit/index.html.vue"
const data = JSON.parse("{\"path\":\"/lit/\",\"title\":\"Lit\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"用 Lit 构建任何东西\",\"slug\":\"用-lit-构建任何东西\",\"link\":\"#用-lit-构建任何东西\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"lit/README.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">介绍</p>\\n<p>在 Web Components 标准之上构建，Lit 添加了让您感到快乐和高效的东西：反应性、声明性模板和一些周到的功能，以减少样板文件并使您的工作更轻松。每个 Lit 功能都经过精心设计，并考虑了 Web 平台的演变。Lit 的大小约为 5 KB（已压缩和压缩），有助于保持较小的包大小并缩短加载时间。渲染速度非常快，因为 Lit 在更新时只触及 UI 的动态部分——无需重建虚拟树并与 DOM 进行比较。每个 Lit 组件都是原生 Web 组件，具有超强的互操作性。Web 组件可以在任何使用 HTML 的地方工作，可以使用任何框架，也可以根本不使用。这使得 Lit 成为构建可共享组件、设计系统或可维护、面向未来的网站和应用程序的理想选择。</p>\\n</div>\"}")
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
