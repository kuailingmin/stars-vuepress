# 代码提交规范

::: tip 说明
   以前团队人员提交代码时候没有好的commit描述规范，而现在我们有一个好的工具可以帮助我们规范提交代码。
:::

### 安装husky
   husky 是一个 Git 钩子（Git hooks）工具，它可以让你在 Git 事件发生时执行脚本，进行代码格式化、测试等操作。

```js
  pnpm add husky -D
```

### 配置husky

```js
 npx husky init
```
项目工程会自动生成一个.husky文件夹，里面有一个pre-commit文件。

pre-commit文件内容如下：

```shell
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"

  pnpm lint // 执行lint命令
```

packa.json文件husky配置如下：

```json
"husky": {
    "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
}
```
做完上面的配置后，每次提交代码的时候都会自定义的执行命令做操作了。


### 安装Commitizen

下面我们安装提交代码的规范工具Commitizen，用于以一致的方式编写规范的提交消息，需要安装Commitizen 和一个适配器cz-conventional-changelog

```js
 pnpm install commitizen cz-conventional-changelog -D
```

在package.json文件添加配置如下：
```json
"scripts": {
    "commit": "git-cz"
},
 "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

一切准备工作已经完成，现在执行命令

##### 第一步：
```js
  git add .
```
##### 第二步：
```js
   pnpm commit
```

![](../images/commit.png)

首先选择提交信息的类型，然后经过以下5步的操作

```js
1. ? What is the scope of this change // 此更改的范围是什么
2. ? Write a short, imperative tense description of the change//【必填】 简短的描述这个变化
3. ? Provide a longer description of the change//提供变更的详细说明：
4. ? Are there any breaking changes? //有什么突破性的变化吗？【y/n】
5. ? Does this change affect any open issues? (y/N) //此更改是否会影响任何悬而未决的问题（是/否）
```
这里操作完成就相当于执行了git commit -m "提交信息"

##### 最后一步：



```js
   git push
```
