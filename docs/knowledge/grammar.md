# Javascript语法简化

::: tip 说明
  我们在编写代码过程中会发现，尤其是业务场景复杂的时候，代码写出来可读性不高，让后面维护人员看起来很头疼，那就要思考怎么简化我们的代码结构，让可读性高，维护成本降低呢？接下来就总结一些点
:::

### 多表达式多 if 判断
这个是我们处理业务逻辑中最常见，使用频率很高。有时候会看到一长串的if逻辑。

``` js
  // 平常的写法
  if (k === 'one' || k === 'two' || k === 'three' || k ==='four') {}

  // 简化的写法
  if(['one','two','three','four'].includes('one')){}

```

### if else

``` js
  // 平常的写法
  let klm: boolean
  if(x > 1){
    klm = true
  } else {
    klm = false
  }

  // 简化的写法
  let klm = (x > 1) ? true : false
  // or
  let klm = x > 1

```

### 合并变量的声明

``` js
  // 平常的写法
  let one
  let two = 2

  // 简化的写法
  let one, two = 2

```

### 合并变量赋值

``` js
  // 平常的写法
  let one, two 
  one = 1
  two = 2

  // 简化的写法
  let [one,two] = [1,2]

```

### && 运算符

``` js
  // 平常的写法
  if(show){
    showEvent()
  }

  // 简化的写法
  show && showEvent()

```

### 箭头函数

``` js
  // 平常的写法
  function add(a,b){
      return a + b
  }

  // 简化的写法
  const add = (a,b) => a + b

```

### 短函数调用


``` js

  const fun1 = () => console.log('fun1')
  const fun2 = () => console.log('fun2') 
   
  // 平常的写法
  let test:boolean

  if(test){
     fun1()
  } else {
     fun2()
  }

  // 简化的写法
 (test?fun1:fun2)()

```

### Switch 简写

``` js

  // 平常的写法
  switch(data){
      case 10:
        test1()
       break;
      case 20:
        test2()
       break;
      case 30:
        test3()
       break;
  }

  // 简化的写法
  const data = {
      10: test1,
      20: test2,
      30: test3
  }

  data[something] && data[something]();

```

### 扩展运算符

``` js
// 平常写法
const data = [1, 2, 3];
const test = [4 ,5 , 6].concat(data);
// 简化写法
const data = [1, 2, 3];
const test = [4 ,5 , 6, ...data];


// 平常写法
const test1 = [1, 2, 3];
const test2 = test1.slice()
// 简化写法
const test1 = [1, 2, 3];
const test2 = [...test1];
```

### 模版字符串

``` js
  // 平常的写法
  const tpl = 'Hi ' + test1 + ' ' + test2 

  // 简化的写法
  const tpl = `Hi ${test1}  ${test2}`
```

### 对象

``` js

 let t1 = 1
 let t2 = 2

  // 平常的写法
  let obj = {
      t1: t1,
      t2: t2
  }

  // 简化的写法
  let obj = {t1,t2 }
```

### 数组中查找最大值和最小值

``` js
const list = [1,2,3]

// 查找最大值
Math.max(...list)

// 查找最小值
Math.min(...list)
```

### 多行字符串简写

``` js
  // 平常的写法
  const data =
  "abc abc abc abc abc abc" +
  "test test,test test test test";

  // 简化的写法
  const data = `abc abc abc abc abc abc
         test test,test test test test`;
```

### 将字符串转换成数字

``` js
  // 平常的写法
  let test1 = parseInt("123");
  let test2 = parseFloat("12.3");

  // 简化的写法
  let test1 = +"123";
  let test2 = +"12.3";
```

###  解构简写

``` js
  // 平常的写法
  const t1 = this.data.t1
  const t2 = this.data.t2
  const t3 = this.data.t3

  // 简化的写法
  const { t1, t2, t3 } = this.data
```

### 按位索引简写
``` js
    // 平常的写法
    if (arr.indexOf(item) > -1) {
    }
    if (arr.indexOf(item) === -1) {
    }

    // 简化的写法
    if (~arr.indexOf(item)) {
    }
    if (!~arr.indexOf(item)) {
    }
```

### 数学指数幂函数的简写
``` js
    // 平常的写法
    Math.pow(2, 3)

    // 简化的写法
    2 ** 3
```