# render 方法


### render
::: tip 说明
  在使用 render 方法之前需引入相应的方法。
:::

```JS
import { dateTimeRender, enableRender } from 'utils/renderer'
```


### enableRender
返回 启用/禁用 对应的多语言，并加上状态标记。

```JS
const columns = [
  ...
  {
    title: intl.get('hzero.common.status').d('状态'),
    dataIndex: 'enabledFlag',
    width: 80,
    render: enableRender
  }
]
```

### yesOrNoRender
返回 是/否 多语言 并加上对应的状态标记。

* 0 返回 no(多语言)
* 1 返回 yes(多语言)
```JS
const columns = [
  ...
  {
    title: intl.get('hfile.storage.model.storage.defaultFlag').d('默认'),
    dataIndex: 'defaultFlag',
    width: 100,
    render: yesOrNoRender,
  }
]
```

### totalRender
用于显示数据总量和当前数据顺序

* 0 返回 no(多语言) 
* 1 返回 yes(多语言)
```JS
const columns = [
  ...
  {
    title: intl.get('hfile.storage.model.storage.defaultFlag').d('默认'),
    dataIndex: 'defaultFlag',
    width: 100,
    render: yesOrNoRender,
  }
]
```