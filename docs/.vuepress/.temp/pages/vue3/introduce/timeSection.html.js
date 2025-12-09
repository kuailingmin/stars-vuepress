import comp from "/Users/kuailingmin/Desktop/创业/stars-vuepress/docs/.vuepress/.temp/pages/Vue3/Introduce/timeSection.html.vue"
const data = JSON.parse("{\"path\":\"/Vue3/Introduce/timeSection.html\",\"title\":\"时间切片\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"Vue3/Introduce/timeSection.md\",\"excerpt\":\"\\n<p>根据尤雨溪的推文，此功能不会包含在 Vue 3 中。</p>\\n<p>Vue 3 另一个令人兴奋的性能功能是对时间切片的实验性支持，但是它很少被提及。</p>\\n<p>用一个比喻来解释什么是时间切片。想象有一条买冰淇淋的队伍，它非常的长。因为那是镇上最好的冰淇淋，人们一个接一个的去买。由于某种原因，没有关于可用口味的信息。要得到这个信息，你需要询问直接出售冰淇淋的女士。</p>\\n<p>在这种情况下，我们可能最终会得到 2 条记录——其中一条给想要购买冰淇淋的人（说服他们耐心等待），另一条给希望在选择之前了解更多口味信息的人，我们应该尽快获得这个信息。不幸的是，只有一位女士在卖冰淇淋，她在为“主”线上的所有客户提供服务之前不会回答任何问题。</p>\"}")
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
