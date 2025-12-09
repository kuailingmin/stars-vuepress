# 事件循环

::: tip 说明
  笔记一下 Event Loop中 宏任务（macrotask ）和 微任务（microtask ），macrotask 和 microtask 表示异步任务的两种分类。挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 macrotask 的队列（这个队列也被叫做 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完。
:::


### 执行优先级限制
  并不止一个消息队列，有异步队列和事件队列，而事件队列总是优先于异步队列被空闲下来的JS线程取用
  * 宏任务：script中代码，setTimeout，setInterval、I/O、UI render
  * 微任务：Promise、Object.observe、MutationObserver

<font color=red  face="黑体">注:Object.observe好像被废弃了，有文章还说到Angular 2团队曾经实验性的使用了 O.o，但是因为性能原因最终放弃了</font>

[点击查看具体原因](https://github.com/luokuning/blogs/issues/1)

  宏任务和微任务之间的关系图：
  ![](../images/event.png)


  代码体现:
  ``` js
    new Promise((resolve) => {
        console.log('外层宏事件2');
        resolve()
    }).then(() => {
        console.log('微事件1');
    }).then(()=>{
        console.log('微事件2')
    })
    console.log('外层宏事件1');
    setTimeout(() => {
        //执行后 回调一个宏事件
        console.log('内层宏事件3')
    }, 0)
```

结果：

1. 外层宏事件2
2. 外层宏事件1
3. 微事件1
4. 微事件2
5. 内层宏事件3


### 浏览器环境

* 浏览器环境下的 异步任务 分为 宏任务(macroTask) 和 微任务(microTask)：

* 宏任务(macroTask)：script 中代码、setTimeout、setInterval、I/O、UI render；

* 微任务(microTask)： Promise、Object.observe、MutationObserver。

* 当满足执行条件时，宏任务(macroTask) 和 微任务(microTask) 会各自被放入对应的队列：宏队列(Macrotask Queue) 和 微队列(Microtask Queue) 中等待执行。

### node.js环境
在 Node 环境中 任务类型 相对就比浏览器环境下要复杂一些：

* microTask：微任务；

* nextTick：process.nextTick；

* timers：执行满足条件的 setTimeout 、setInterval 回调；

* I/O callbacks：是否有已完成的 I/O 操作的回调函数，来自上一轮的 poll 残留；

* poll：等待还没完成的 I/O 事件，会因 timers 和超时时间等结束等待；

* check：执行 setImmediate 的回调；

* close callbacks：关闭所有的 closing handles ，一些 onclose 事件；
idle/prepare 等等：可忽略。

因此，也就产生了执行事件循环相应的任务队列 Timers Queue、I/O Queue、Check Queue 和 Close Queue。
