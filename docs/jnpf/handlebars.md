# handlebars

::: tip 说明
  1. Handlebars 提供了必要的功能，使你可以高效地构建语义化模板。
  2. Handlebars 与 Mustache 模板基本兼容。大多数情况下，您可以在使用 Handlebars 的同时继续使用您当前的模板。
  3. Handlebars 会将模板编译为 JavaScript 函数。这使得 Handlebars 的执行速度比其他大多数模板引擎都要快。
:::

## 基本用法

Handlebars 是一种简单的 模板语言。

它使用模板和输入对象来生成 HTML 或其他文本格式。Handlebars 模板看起来像常规的文本，但是它带有嵌入式的 Handlebars 表达式 。

Handlebars 表达式是一些以双花括号 {{}} 括起来的内容。在以下的模版中，firstname 是一个被声明为表达式的变量，且被双花 括号括起来。


``` html
<p>{{firstname}} {{lastname}}</p>
```


如果将以下对象输入模板：

``` js
{
  firstname: "Yehuda",
  lastname: "Katz",
}
```

输出：
``` html
<p>Yehuda Katz</p>
```


## 路径表达式

Handlebars 表达式亦可为以句点分隔的路径。

``` html
{{person.firstname}} {{person.lastname}}
```
这个表达式将会在输入对象中查找 person 属性，然后查找 person 对象中的 firstname 和lastname属性。 person 对象内的 属性。

传入模版的数据格式


``` js
{
  person: {
    firstname: "Yehuda",
    lastname: "Katz",
  },
}
```

输出结果：

``` html
Yehuda Katz
```

## 助手代码

助手代码可以实现一些并非 Handlesbars 语言本身的功能。

在运行时可以用 HandleBars.registerHelper 可以注册助手代码。例如为了将字符串中的所有字符转换为大写。


1. 模版

``` html
{{firstname}} {{loud lastname}}
```

2. API使用
``` js
Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
})
```

3. 数据
``` js
{
  firstname: "Yehuda",
  lastname: "Katz",
}
```

结果

表达式中加"load"的数据就会发生变化，这点有点像vue中的filter过滤器

``` html
Yehuda KATZ
```