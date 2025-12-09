import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/react/base.html.vue"
const data = JSON.parse("{\"path\":\"/react/base.html\",\"title\":\"React知识点\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"react/base.md\",\"excerpt\":\"\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">说明</p>\\n<p>react.js大杂烩</p>\\n</div>\\n<h3>jsx与Fiber</h3>\\n<p>在源码中区分mount和update，mount是初次渲染根据jsx生成Fiber对象，在update的时候根据最新状态的jsx和当前的Fiber对象做对比生成新的Fiber对象。</p>\\n<h3>hooks为什么不能写在条件判断中</h3>\\n<p>如果写了多个hooks，在源码中会创建成一个链表，如果写在判断中，hooks链表顺序会乱！</p>\\n\"}")
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
