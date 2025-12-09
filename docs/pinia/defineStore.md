# defineStore

在深入研究核心概念之前，我们需要知道存储是使用定义的defineStore()，并且它需要一个唯一的名称，作为第一个参数传递：

```js
import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  // other options...
})
```

这个名称，也称为id，是必要的，Pania 使用它来将Stores连接到 devtools。将返回的函数命名为use...是可组合项之间的约定，以使其使用习惯。

### 使用Store
我们正在定义useStore()一个Store，因为Store在被调用之前不会被创建setup()：

```js
import { useStore } from '@/stores/counter'

export default {
  setup() {
    const store = useStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
}
```

您可以根据需要定义任意数量的Store，并且应该在不同的文件中定义每个Store以充分利用 pinia（例如自动允许您的包进行代码拆分和 TypeScript 推理）。

如果您还没有使用setup组件，您仍然可以将 Pinia 与map helpers一起使用。

实例化Store后，您可以直接在Store中访问定义在state、getters和中的任何属性。actions我们将在接下来的页面中详细介绍这些内容，但自动补全会对您有所帮助。

<font color=red  face="黑体">请注意，这store是一个用 包裹的对象reactive，这意味着不需要.value在 getter 之后编写</font>
，但是像propsin一样setup，我们不能对其进行解构

```js
export default defineComponent({
  setup() {
    const store = useStore()
    // ❌ This won't work because it breaks reactivity
    // it's the same as destructuring from `props`
    const { name, doubleCount } = store

    name // "eduardo"
    doubleCount // 2

    return {
      // will always be "eduardo"
      name,
      // will always be 2
      doubleCount,
      // this one will be reactive
      doubleValue: computed(() => store.doubleCount),
      }
  },
})
```

为了从存储中提取属性同时保持其反应性，您需要使用storeToRefs(). 它将为任何反应性属性创建参考。当您仅使用商店中的状态但不调用任何操作时，这很有用：

```js
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useStore()
    // `name` and `doubleCount` are reactive refs
    // This will also create refs for properties added by plugins
    // but skip any action or non reactive (non ref/reactive) property
    const { name, doubleCount } = storeToRefs(store)

    return {
      name,
      doubleCount
    }
  },
})
```
