import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/standard/git.html.vue"
const data = JSON.parse("{\"path\":\"/standard/git.html\",\"title\":\"git规范\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"standard/git.md\",\"excerpt\":\"<!--\\n * @Author: 蒯灵敏\\n * @Date: 2025-06-12 14:18:56\\n * @LastEditors: 蒯灵敏\\n * @LastEditTime: 2025-06-13 09:36:24\\n * @Description: 文件描述\\n * @FilePath: /stars-vuepress/docs/standard/git.md\\n-->\\n<h1>git规范</h1>\\n<h3>分支命名规范</h3>\\n<ol>\\n<li>\\n<p>master 主分支\\n用于部署生产环境的分支，一般由test分支经过测试完整测试之后合并到主分支</p>\\n</li>\\n<li>\\n<p>test 测试分支\\n专门用户测试产品使用的分支,测试完全通过合并到master分支</p>\\n</li>\\n<li>\\n<p>develop 开发分支\\n一般开发的新功能时，feature分支都是基于develop分支下创建的，需要始终保持最新完成以及bug修复后的代码，然后提交给test分支进行测试</p>\\n</li>\\n<li>\\n<p>feature 新功能分支（一般简写为feat）\\n开发新功能时，以develop为基础创建feature分支。 命名规则:feat/你的名称_模块_功能_时间</p>\\n</li>\\n<li>\\n<p>hotfix 修复分支（一般简写为fix）\\n修复上线紧急问题，需要及时修复，这个是以master分支为基础来创建分支，修复完成之后需要合并到develop、test、master分支 命名规则: fix/你的名称_模块_功能_时间</p>\\n</li>\\n</ol>\"}")
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
