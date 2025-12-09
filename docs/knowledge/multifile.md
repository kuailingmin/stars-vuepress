# 自动导入文件

::: tip 说明
  在我们平常开发业务场景中，会把多个js/ts文件通过一个出口暴露给外面。一般写法就会多次引用，解了一下现在用的打包工具，比如webpack和vite，发现了一种更优的方案
:::

#### webpack方案

在webpack中提供了require.context Api, 通过执行require.context函数获取一个特定的上下文,

```js
const files = require.context('.', false, /.js$/)
const obj = {}
files.keys().forEach(key => {
    if (key === './index.js') return
    Object.assign(obj, { ...files(key).default })
    
})
export default apiObj
```

require.context函数接受三个参数
1. directory {String} -读取文件的路径
2. useSubdirectories {Boolean} -是否遍历文件的子目录
3. regExp {RegExp} -匹配文件的正则

####  Vite 方案

Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：


```js
const modules = import.meta.glob('./dir/*.js')
```

以上将会被转译为下面的样子：

```js
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js'),
  './dir/bar.js': () => import('./dir/bar.js')
}
```


遍历 modules 对象的 key 值来访问相应的模块
```js
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}
```

如果是Typescript的开发中使用import.meta.glob需要设置tsconfig文件
```js
{
  "compilerOptions": {
    "types": ["vite/client"]
  }
}
```

资料参考源码：[element-plus-admin](https://github.com/hsiangleev/element-plus-admin/blob/master/src/router/asyncRouter.ts)