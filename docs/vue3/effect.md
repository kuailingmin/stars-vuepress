# 响应式原理实现

::: tip 说明
   "Effect"在react.js里面使用场景很多，但在以前的vue版本里面 “compute”、“watch”也是使用Effect机制，如今的版本中"compute"不再依赖"Effect", 在vue中的响应式如何实现？
:::

先看一段vue的代码

``` js
import { effect, ref } from 'vue'
const count = ref(0)
effect(()=>{
    console.log('值===>', count.value)
})
```
从上面的代码分析， 只要count值发生变化，effect就能监听到， 接下来实现一个简化的"Effect"的响应式</br>


首先在全局地方创建一个变量来接收回调函数,这个参数在ref和effect中都会使用到
``` js
let activeStars
```
我们要模拟创建一个ref对象:

``` js
/**
 * 创建ref类,提供get,set来实现观察者模式
 */
class RefImpl {
    _value
    subs = new Set<() => void>()
    constructor(value: any) {
        this._value = value
    }
    get value() {
        //收集依赖
        if (activeStars) {
            this.subs.add(activeStars || undefined)
        }
        return this._value
    }
    set value(newValue) {
        //触发更新
        this._value = newValue
        this.subs.forEach((fn) => fn())
    }
}

/**
 * 创建ref
 */
function ref(value: any) {
    return new RefImpl(value)
}
```

``` js
 
 /**
  * 创建effect
  */

 function effect(fn:() => void) {
    // 这种是跨作用域的设计方案 
    activeStars = fn
    fn()
    activeStars = undefined
 }

```

完成上面的逻辑之后接下来抛出ref和effect即可

``` js
 export {
    ref,
    effect
 }
```

接下来我创建一个入口文件来模拟vue的使用场景
``` js
import {ref, effect} from './effect'

const count = ref(0)

effect(()=>{
    console.log('count.value ===>', count.value)
})

setTimeout(()=>{
    count.value++
},1000)
```
最终运行结果和vue实现的效果一样
``` js
  count.value ===> 0
  count.value ===> 1
```