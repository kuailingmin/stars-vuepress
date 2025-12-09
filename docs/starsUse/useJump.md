
# useJump

用于乾坤系统之间的页面跳转。

## 代码演示

### 基本用法

```js
import { useJump } from 'stars-use';

export default {
  setup() {
   // 第一种
    const state = {}
    const title = ''
    const url = 'http://xxx.com?user' + user
    useJump(state,title,url);

   // 第二种
    useJump({},'title','url');
  },
};
```

### 设置默认值


## API

### 类型定义

```ts
function useJump(state:object,title:string,url:string);
```

### 参数

| 参数          | 说明                        | 类型       | 默认值    |
| ------------ | --------------------------- | --------- | ------- |
| state        | 状态对象是一个JavaScript对象，它与pushState()创建的新历史记录条目相关联 | object     |  {}    |
| title        | 当前大多数浏览器都忽略此参数，尽管将来可能会使用它,在此处传递空字符串应该可以防止将来对方法的更改 | string     |      |
| url          |新历史记录条目的URL由此参数指定 | string     |      |

### 返回值

| 参数   | 说明             | 类型                           |
| ------ | ---------------- | ------------------------------ |
|   |            |         |
