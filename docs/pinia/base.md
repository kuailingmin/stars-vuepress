# pinia

### 介绍
 Pinia最初是在 2019 年 11 月左右重新设计使用Composition API的 Vue Store 外观的实验。从那时起，最初的原则仍然相同，但 Pinia 适用于 Vue 2 和 Vue 3 ，并且不需要你使用组合 API。除了安装和SSR之外，两者的 API 都是相同的，并且这些文档针对 Vue 3 ，并在必要时提供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读！
 
 为什么起名“Pinia”？Pinia（发音为/piːnjʌ/，如英语中的“peenya”）是最接近piña（西班牙语中的菠萝）的词，它是一个有效的包名称。菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。与Stores类似，每一家都是独立诞生的，但最终都是相互联系的。它也是一种美味的热带水果，原产于南美洲。

### 为什么要使用 Pinia？
Pinia 是 Vue 的Stores库，它允许您跨组件/页面共享状态。如果您熟悉 Composition API，您可能会认为您已经可以使用简单的export const state = reactive({}). 这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，则会将您的应用程序暴露给安全漏洞。但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：
1. 开发工具支持
* 跟踪actions、mutations
* Stores出现在使用它们的组件中
* Time travel 更容易的调试
2. 热模块更换
* 在不重新加载页面的情况下修改您的Stores
* 在开发时保持任何现有状态
3. 插件：使用插件扩展 Pinia 功能
4. 为 JS 用户提供适当的 TypeScript 支持或自动完成功能
5. 服务器端渲染支持

### 基本示例
```js
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})  
```

然后在组件中使用它：

```js
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counter = useCounterStore()

    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
  },
}
```

你甚至可以使用一个函数（类似于一个组件setup()）来为更高级的用例定义一个 Store:

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

如果您仍然不熟悉setup()Composition API，请不要担心，Pinia 还支持一组类似的mapHelpers，例如 Vuex。您以相同的方式定义Stores，但随后使用mapStores()、mapState()或mapActions()：

```js
const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

const useUserStore = defineStore('user', {
  // ...
})

export default {
  computed: {
    // other computed properties
    // ...
    // gives access to this.counterStore and this.userStore
    ...mapStores(useCounterStore, useUserStore)
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ['count', 'double']),
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}

```


### 一个更现实的例子
这是一个更完整的 API 示例，您将在Pinia中使用类型，即使在 JavaScript 中也是如此。对于某些人来说，这可能足以在不进一步阅读的情况下开始使用，但我们仍然建议检查文档的其余部分，甚至跳过此示例，并在阅读完所有核心概念后返回。

```js
import { defineStore } from 'pinia'

export const todos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // call other getters with autocompletion ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```