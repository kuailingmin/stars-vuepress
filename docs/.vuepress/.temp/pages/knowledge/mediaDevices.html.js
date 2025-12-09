import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/knowledge/mediaDevices.html.vue"
const data = JSON.parse("{\"path\":\"/knowledge/mediaDevices.html\",\"title\":\"navigator.mediaDevices API\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"knowledge/mediaDevices.md\",\"excerpt\":\"\\n<h3>什么是 navigator.mediaDevices?</h3>\\n<p>在现代浏览器中，可以通过navigator.mediaDevices对象访问设备媒体，包括摄像头和麦克风。\\n它提供了一些方法来枚举可用设备、请求媒体访问权限以及管理媒体流。\\n使用navigator.mediaDevices API需要遵循用户的权限控制原则，确保隐私安全。</p>\\n<h3>支持场景</h3>\\n<ul>\\n<li>视频会议（如 Zoom Web）</li>\\n<li>在线直播</li>\\n<li>浏览器截图/录屏工具</li>\\n<li>人脸识别类应用</li>\\n</ul>\\n<h3>getUserMedia(constraints)：请求媒体权限</h3>\"}")
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
