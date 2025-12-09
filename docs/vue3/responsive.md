# 响应式

::: tip 说明
 在vue3 提供了Ref和Reactive做数据响应
:::

**Ref**

``` js
import { ref } from 'vue'

let a = 0
let b = ref(0)

a = 1
b = 1  //ts-error
```
好处
1. 显示调用，类型检查
2. 相比Reactive局限更少

坏处
1. 用'.value'


**Reactive**

``` js
import { reactive } from 'vue'

let a = { age: 0 }
let b = reactive({age: 0 })

a.age = 20
b.age = 20  
```
好处
1. 自动Unwrap(即不需要‘.value’)

坏处
1. 在类型上和一般对象没有区别,除非看上下文才能区别
2. 使用ES6解构会使响应性丢失，我们会用toRef或toRefs
3. 需要使用箭头函数包装才能使用监听‘watch’