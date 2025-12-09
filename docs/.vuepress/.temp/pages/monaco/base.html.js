import comp from "/Users/kuailingmin/Desktop/old work/stars-vuepress/docs/.vuepress/.temp/pages/monaco/base.html.vue"
const data = JSON.parse("{\"path\":\"/monaco/base.html\",\"title\":\"monaco editor 编程工具\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]}],\"git\":{\"updatedTime\":1724655240000,\"contributors\":[{\"name\":\"前端艺术者\",\"email\":\"kuailingmin@126.com\",\"commits\":1}]},\"filePathRelative\":\"monaco/base.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">介绍</p>\\n<ol>\\n<li>monaco editor 是微软开源的编程工具，基于浏览器，功能强大且灵活</li>\\n<li>在vue.js和react.js都能无缝对接</li>\\n<li>微软之前有个项目叫做 Monaco Workbench，后来这个项目变成了VSCode，而 Monaco Editor 就是从这个项目中成长出来的一个web编辑器</li>\\n</ol>\\n</div>\\n<h3>安装</h3>\\n<p>pnpm i monaco-editor</p>\"}")
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
