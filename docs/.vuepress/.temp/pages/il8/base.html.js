import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/il8/base.html.vue"
const data = JSON.parse("{\"path\":\"/il8/base.html\",\"title\":\"前端国际化\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"il8/base.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>在一些项目中和国际接轨，这个时候需要前端展示能够很方便的展示不同国家的内容，所以诞生了一些国际化的方案，方式有2类，第一类切换国家语言的时候页面刷新，第二类是切换语言的时候页面不刷新，只改变语言内容。我们从用户体验角度选择了第二类方式来做前端国际化！</p>\\n</div>\\n<h3>安装react-i18next</h3>\\n<p>依赖安装</p>\\n<div class=\\\"language-cmd line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"cmd\\\"><pre><code class=\\\"language-cmd\\\"><span class=\\\"line\\\">  pnpm add i18next i18next-http-backend i18next-browser-languagedetector -D</span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
