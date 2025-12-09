# style (黑科技)

::: tip 说明
   在前一阵子VueConf2021大会上，尤雨溪提到一个有趣的东西，那就是在Vue3.x版本加入了一个机制，通过js可以逻辑控制css style的变化。而且尤雨溪重点提到此功能利用浏览器原生的API去做的，性能消耗很小很小，几乎为零！在 SFC Style Variables 提案中介绍到， Vue SFC 样式提供了简单的 CSS 组合和封装，现在大多数现代浏览器都支持原生 CSS 变量，我们可以利用它轻松连接组件的状态和样式。那我们就看看它是如何实现的？
:::

# SFC提案
sfc-style-variables 主要概述中指出，此提案支持单文件组件状态驱动的 CSS 变量注入到单文件组件样式中。

<font color=red face="黑体">旧版提案:</font>

``` js
<template>
  <div class="text">hello</div>
</template>

<script>
    export default {
    data() {
        return {
        color: 'red'
        }
    }
    }
</script>

<style vars="{ color }">
    .text {
     color: var(--color);
    }
</style>

```

旧版提案设计的弊端：

1. 需要手动声明 vars 以公开可以使用的变量。
2. 没有明显的视觉暗示变量被注入和响应。
3. scoped/non-scoped 模式下的不同行为。
4. 在 non-scoped 模式下，CSS 变量会泄漏到子组件中。
5. 在 scoped 模式下，使用在组件外部声明的普通 CSS 变量需要 global: 前缀。（通常 CSS 变量用法最好在组件内外保持相同）


 <font color=red face="黑体">新版提案:</font>

``` js
<template>
  <div class="text">hello</div>
</template>

<script>
    export default {
    data() {
        return {
          color: 'red'
        }
    }
    }
</script>

<style>
    .text {
     color: v-bind(color);
    }
</style>

```
新版提案的改进

1. 无需明确声明哪些属性被注入为 CSS 变量（从CSS 中的使用 v-bind() 进行推断）
2. 反应变量的视觉差别更明显
3. scoped/non-scoped 模式下的相同行为
4. 不会泄漏到子组件中
5. 普通 CSS 变量的使用不受影响


# 核心代码

::: tip 说明
   查阅资料之后简述一下这个流程，首先vue-loader 会解析 .vue 文件，并提取语言块，如有必要会通过其它 loader 处理，
   最后将他们组装成一个 ES Module，它的默认导出是一个 Vue.js 组件选项的对象如果在‘style’ 中通过 lang 属性，
   使用其他 CSS 预处理语言（less、sass）等，则会匹配构建工具（webpack、vite）所配置的 loader 进行特定处理。
   Vue3 SFC Style 中的部分编译主要是由 postcss 完成的 Vue 源码中对应着 packages/compiler-sfc/sfc/compileStyle.ts 中的 doCompileStyle() 方法
:::


代码

``` js {11}
export function doCompileStyle(
  options: SFCAsyncStyleCompileOptions
): SFCStyleCompileResults | Promise<SFCStyleCompileResults> {
  const {
    ...
    id,
    ...
  } = options
  ...
  const plugins = (postcssPlugins || []).slice()
  plugins.unshift(cssVarsPlugin({ id: shortId, isProd }))
  ...
}
```

在使用 postcss 编译'style' 之前会加入 cssVarsPlugin 插件


 <font color=red face="黑体">cssVarsPlugin:</font>

 ``` js 
const cssVarRE = /\bv-bind\(\s*(?:'([^']+)'|"([^"]+)"|([^'"][^)]*))\s*\)/g
const cssVarsPlugin: PluginCreator<CssVarsPluginOptions> = opts => {
    const { id, isProd } = opts!
    return {
        postcssPlugin: 'vue-sfc-vars',
        Declaration(decl) {
            // rewrite CSS variables
            if (cssVarRE.test(decl.value)) {
                decl.value = decl.value.replace(cssVarRE, (_, $1, $2, $3) => {
                return `var(--${genVarName(id, $1 || $2 || $3, isProd)})`
                })
            }
        }
    }
}
```


# CSS 变量注入的优势
1. 主题 - 通过响应式的全局样式，进行主题变更。（参考 Naive UI）。
2. 同其他 CSS 预处理语言（Less、Sass 等）相比，免于安装，不用配置 loader。
3. 结合响应式特性，可以很好的模块化，不用导出 CSS 样式文件。
