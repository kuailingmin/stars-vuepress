# React知识点

::: tip 说明
  react.js大杂烩
:::


### jsx与Fiber

在源码中区分mount和update，mount是初次渲染根据jsx生成Fiber对象，在update的时候根据最新状态的jsx和当前的Fiber对象做对比生成新的Fiber对象。

### hooks为什么不能写在条件判断中

如果写了多个hooks，在源码中会创建成一个链表，如果写在判断中，hooks链表顺序会乱！

