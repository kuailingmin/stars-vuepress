import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/react/interview.html.vue"
const data = JSON.parse("{\"path\":\"/react/interview.html\",\"title\":\"React知识点\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"jsx与Fiber\",\"slug\":\"jsx与fiber\",\"link\":\"#jsx与fiber\",\"children\":[]},{\"level\":3,\"title\":\"hooks为什么不能写在条件判断中\",\"slug\":\"hooks为什么不能写在条件判断中\",\"link\":\"#hooks为什么不能写在条件判断中\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"react/interview.md\",\"excerpt\":\"\\n<div class=\\\"custom-container tip\\\"><p class=\\\"custom-container-title\\\">说明</p>\\n<p>react.js大杂烩</p>\\n</div>\\n<h3>jsx与Fiber</h3>\\n<p>在源码中区分mount和update，mount是初次渲染根据jsx生成Fiber对象，在update的时候根据最新状态的jsx和当前的Fiber对象做对比生成新的Fiber对象。</p>\\n<h3>hooks为什么不能写在条件判断中</h3>\\n<p>如果写了多个hooks，在源码中会创建成一个链表，如果写在判断中，hooks链表顺序会乱！</p>\\n\"}")
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
