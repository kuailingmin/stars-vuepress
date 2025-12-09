import comp from "/Users/kuailingmin/Desktop/klm/stars-vuepress/docs/.vuepress/.temp/pages/java/jvmTime.html.vue"
const data = JSON.parse("{\"path\":\"/java/jvmTime.html\",\"title\":\"JVM运行时数据区\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765249106000,\"contributors\":[{\"name\":\"前端艺术者\",\"username\":\"\",\"email\":\"kuailingmin@126.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd3b6522abcfccbdafa315316a05833baf4ffb6\",\"time\":1765249106000,\"email\":\"kuailingmin@126.com\",\"author\":\"前端艺术者\",\"message\":\"文档架构\"}]},\"filePathRelative\":\"java/jvmTime.md\",\"excerpt\":\"\\n<p></p>\\n<h4>👒线程私有的内存区域：</h4>\\n<ul>\\n<li>程序计数器、虚拟机栈、本地方法栈</li>\\n</ul>\\n<h4>🌂线程共享的内存区域：</h4>\\n<ul>\\n<li>方法区、Java堆</li>\\n</ul>\\n<h3>二、线程私有的内存区域</h3>\\n<h4>🍛2.1 程序计数器</h4>\\n<blockquote>\\n<p><strong>Program Counter</strong>，简称 <strong>PC</strong>，用于存放 <em>下一条</em> 指令所在单元的地址，是<code>线程所执行的字节码的行号指示器</code>。因为JVM的多线程是通过轮流切换来分配CPU的执行时间（时间片轮询），当切换到下一条线程的时候，<strong>线程要能知道当前要执行的字节码位置</strong>，这就要求每条线程都要有一个自己的程序计数器，独立<code>存储</code>待执行的虚拟机字节码指令的地址。</p>\\n</blockquote>\"}")
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
