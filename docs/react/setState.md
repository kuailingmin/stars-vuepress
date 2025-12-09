# 设置状态

::: tip 说明
   setState是我们在React.js开发过程中很关键，重要的，它是改变视图必经之路，在它的运行过程中有几个点需要知道的
:::


### 异步 or 同步

那要看我们怎么去操作了，如果正常的情况下，看出的结果是异步，如果脱离react.js中的事件流和生命周期，setState则是同步，归根结底还是因为react框架本身的性能机制所导致的

```js
   // 数据定义
   state = {
        counts:1
   };

   // 事件中的处理
   handleClick = () => {
    const count = Math.floor(Math.random() * 10)
    console.log('开始运行')
    this.setState({
      counts: this.state.counts + count
    }, () => {
      console.log('点击计数:', count)
    })
    console.log('结束运行')
  }
```
打印结果：
1. 开始运行
2. 结束运行
3. 点击计数: 10

从上面代码看出最后才执行“点击计数”,其实这是一个假象，主要原因在 React 的生命周期以及绑定的事件流中，所有的 setState 操作会先缓存到一个队列中，在整个事件结束后或者 mount 流程结束后，才会取出之前缓存的 setState 队列进行一次计算，触发 state 更新。那怎么实现同步效果呢？看下一段代码：

```js
   // 数据定义
   state = {
        counts:1
   };

   // 事件中的处理
   handleClick = () => {
    setTimeout(() => {
      const count = Math.floor(Math.random() * 10)
      console.log('开始运行')
      this.setState({
        counts: this.state.counts + count
      }, () => {
        console.log('点击计数:', count)
      })
      console.log('结束运行')
    })
  }
```
打印结果：
1. 开始运行
2. 点击计数: 10
3. 结束运行

###  为什么加了一个setTimeout函数就能同步了？

1. 在调用栈中， Component.setState 方法最终会调用 enqueueSetState 方法，而 enqueueSetState 方法内部会调用 scheduleUpdateOnFiber 方法，区别就在于正常调用的时候，scheduleUpdateOnFiber 方法内只会调用 ensureRootIsScheduled ，在事件方法结束后，才会调用 flushSyncCallbackQueue 方法。
2. 使用setTimeout会脱离 React 事件流的时候，scheduleUpdateOnFiber 在 ensureRootIsScheduled 调用结束后，会直接调用 flushSyncCallbackQueue 方法，这个方法就是用来更新 state 并重新进行 render。


### setState是宏任务还是微任务呢？
```js
   // 数据定义
   state = {
        counts:1
   };
   // 事件中的处理
   handleClick = () => {
    const count = Math.floor(Math.random() * 10)
    setTimeout(() => {
    console.log('宏任务触发')
    })
    Promise.resolve().then(() => {
      console.log('微任务触发')
    })
    this.setState({
      counts: this.state.counts + count
    }, () => {
      console.log('点击计数:', count)
    })
  }
```
打印结果：
1. 点击计数: 10
2. 微任务触发
3. 宏任务触发

先完成了 setState 操作，然后再是微任务的触发和宏任务的触发。所以，setState 的执行时机是早于微任务与宏任务的   