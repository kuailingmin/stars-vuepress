import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/hzero/index.html.vue"
const data = JSON.parse("{\"path\":\"/hzero/\",\"title\":\"Hzero\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"hzero/README.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>最近在折腾汉德公司研发的一套微前端技术方案(Choerodon UI)，涉及的技术栈以react.js为主。第一次使用，不断地“进坑”，不断的“出坑”。必须记录一下这个痛苦的过程！为日后团队小伙伴留下一些宝贵的实战经验！</p>\\n</div>\\n\"}")
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
