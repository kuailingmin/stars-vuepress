# meta标签
::: tip 说明
  meta标签可能有些人并不关心，其实很多前端实现都需要它的帮助，尤其搜索引擎的场景中，下面总结多个开发中会使用到的技术点。<br/>
  meta有个必须的属性content用于表示需要设置的项的值。<br/>
  meta存在两个非必须的属性http-equiv和name, 用于表示要设置的项。
:::


## http-equiv属性
http-equiv一般设置的都是与http请求头相关的信息，设置的值会关联到http头部。也就是说浏览器在请求服务器获取html的时候，服务器会将html中设置的meta放在响应头中返回给浏览器。常见的类型比如content-type, expires, refresh, set-cookie, window-target, charset， pragma等等

### content-type
  <meta http-equiv="content-type" content="text/html charset=utf8">可以用来声明文档类型，设置字符集，content-type几乎所有的属性都可以在meta中进行设置。

浏览器的头信息就会包含:
```html
  content-type: text/html charset=utf8
```

### expires
用于设置浏览器的过期时间, 其实就是响应头中的expires属性。
无效的日期，比如 0, 代表着过去的日期，即该资源已经过期。
如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。

```html
 <meta http-equiv="expires" content="31 Dec 2021">
```

### refresh

该种设定表示5秒自动刷新并且跳转到指定的网页。如果不设置url的值那么浏览器则刷新本网页。
```html
 <meta http-equiv="refresh" content="5 url=http://www.zhiqianduan.com">
```

### window-target
强制页面在当前窗口以独立页面显示, 可以防止别人在框架中调用自己的页面。

```html
<meta http-equiv="window-target" content="_top'>
```

### pragma

禁止浏览器从本地计算机的缓存中访问页面的内容

```html
<meta http-equiv="pragma" content="no-cache">
```

## name属性
name属性主要用于描述网页，与对应的content中的内容主要是便于搜索引擎查找信息和分类信息用的, 用法与http-equiv相同，name设置属性名，content设置属性值。

### author

author用来标注网页的作者

```html
<meta name="author" content="klm@mail.com">
```

### description
description用来告诉搜素引擎当前网页的主要内容，是关于网站的一段描述信息。
```html
<meta name="description" content="这是我的HTML">
```

### keywords
keywords设置网页的关键字，来告诉浏览器关键字是什么。是一个经常被用到的名称。它为文档定义了一组关键字。某些搜索引擎在遇到这些关键字时，会用这些关键字对文档进行分类。
```html
<meta name="keywords" content="Hello world">
```

### generator
表示当前html是用什么工具编写生成的，并没有实际作用，一般是编辑器自动创建的。
```html
<meta name="generator" content="vscode">
```

### revised
指定页面的最新版本
```html
<meta name="revised" content="V2，2015/10/1">
```

### robots
告诉搜索引擎机器人抓取哪些页面，all / none / index / noindex / follow / nofollow。
```html
<meta name="robots" content="all">
```

* all：文件将被检索，且页面上的链接可以被查询；
* none：文件将不被检索，且页面上的链接不可以被查询；
* index：文件将被检索；
* follow：页面上的链接可以被查询；
* noindex：文件将不被检索，但页面上的链接可以被查询；
* nofollow：文件将不被检索，页面上的链接可以被查询。


## scheme属性

scheme 属性用于指定要用来翻译属性值的方案。此方案应该在由 head 标签的 profile 属性指定的概况文件中进行了定义。html5不支持该属性。