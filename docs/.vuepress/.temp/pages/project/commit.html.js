import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/project/commit.html.vue"
const data = JSON.parse("{\"path\":\"/project/commit.html\",\"title\":\"代码提交规范\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"project/commit.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>以前团队人员提交代码时候没有好的commit描述规范，而现在我们有一个好的工具可以帮助我们规范提交代码。</p>\\n</div>\\n<h3>安装husky</h3>\\n<p>husky 是一个 Git 钩子（Git hooks）工具，它可以让你在 Git 事件发生时执行脚本，进行代码格式化、测试等操作。</p>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\"><pre><code class=\\\"language-javascript\\\"><span class=\\\"line\\\">  pnpm add husky <span class=\\\"token operator\\\">-</span><span class=\\\"token constant\\\">D</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
