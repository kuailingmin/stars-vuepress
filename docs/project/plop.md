# 前端自动化工具

::: tip 说明
  Plop是一个微生成器框架，之所以这样叫它 ，是因为它是一个可以允许你方便地创建具有一致性（通用性）的代码模板或文本文件的小工具。我们在代码中会经常创建具有同一种结构或模式的代码文件（路由、控制器、组件、辅助类等等）。这些结构和模式会经常演进，导致你无法很容易地在这些代码中找到可以代表当前最佳实践的代码去创建出一个新的类似模式的文件。这就是Plop要解决的问题。使用Plop，你可以很方便地使用代表最佳实践的文件模板去生成同样模式的新文件。使用Plop可以在命令行中方便地生成代码文件，这免去了我们在代码库中寻找和复制那些具有通用模式和结构的代码，这是创建新文件最简单的方法。
:::

## Why Generators？
因为当创建与代码分开的样板时，您自然会投入更多时间和思考  
因为在创建每条路由、组件、控制器、助手、测试、视图等时，可以为您的团队（或您自己）节省 5-15分钟  
因为上下文切换很昂贵，而且节省时间并不是自动化工作流的唯一好处


 ## 基本用法

1. 安装

``` js
  yarn add plop  or  npm install plop -D
```

2. 配置

注：需要在项目工程根目录中添加“plopfile.js”

内容如下：
``` js
  module.exports = function (plop) {
    plop.setGenerator('test', {
        description: '这是一个描述属性',
        prompts: [
            {
                type: 'input', // 操作类型
                name: 'name', // 配置变量定义
                message: '请输入文件名称', //提示信息
                validate: ''  // 验证输入值

            }, {
                type: 'list',
                name: '请选择你的职业？',
                choices: [  
                    '码农',
                    '医生',
                    '警察'
                ]
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'templates/{{name}}.vue'
            }
        ]
    })
}
```
1. plopfile先接收plop对象
2. plop提供了setGenerator(name, config)方法来配置，config参数主要用3个属性“description，prompts，actions”

``` js
 export default function (plop) {
    // create your generators here
    plop.setGenerator('basics', {
        description: 'this is a skeleton plopfile',
        prompts: [], // array of inquirer prompts
        actions: []  // array of actions
    });
};
```
  description：就是描述  
  prompts：自定义配置要问用户的问题  
  actions：最终文件生成配置项  


## 运行
首先在package.json中配置 "plop"启动命令
``` js {5}
  "scripts": {
    "start": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "plop": "plop"
  },
```

执行运行命令： yarn plop
效果如下图：

![](../images/p1.png)

## 模版

plop 配套的是用HBS模版，

## 扩展

plop的模式能方便的让我们扩展不同文件体系的模版，比如tsx,ts,vue,text,html...等等,在vscode体系里面有单独的插件可以做快速代码模版生成的事，但plop的做法更加灵活，且可以让我们根据自定义变量，自定选项配置，集合模版动态生成不同需求的文件，在代码开发的耗时上提升了很大程度！这就是前端工具最主要的特点！