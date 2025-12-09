# Proxy

::: tip 说明
 之前Vue2.x 中基于 Object.defineProperty 的实现所存在的很多限制：无法监听 属性的添加和删除、数组索引和长度的变更，并可以支持 Map、Set、WeakMap 和 WeakSet,现在Vue3.x放弃使用了Object.defineProperty而选择了使用更快的原生Proxy

:::


## 回顾vue2响应式设计的实现


``` js
 let childOb = !shallow && observe(val)
 // 对 data中的数据进行深度遍历，给对象的每个属性添加响应式
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
         // 进行依赖收集
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            // 是数组则需要对每一个成员都进行依赖收集，如果数组的成员还是数组，则递归。
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      // 新的值需要重新进行observe，保证数据响应式
      childOb = !shallow && observe(newVal)
      // 将数据变化通知所有的观察者
      dep.notify()
    }
  })
```
vue2利用Object.defineProperty来劫持data数据的getter和setter操作。这使得data在被访问或赋值时，动态更新绑定的template模块。不过，Object.defineProperty有一些天然的缺陷，而这些缺陷是es2015中Proxy可以解决的。


## vue3响应式设计的实现

``` js
const obj = {
    age: '18'
}
const p = new Proxy(obj, {
    get(target, propKey, receiver) {
        console.log('你访问了' + propKey);
        return Reflect.get(target, propKey, receiver);
    },
    set(target, propKey, value, receiver) {
        console.log('你设置了' + propKey);
        console.log('新的' + propKey + '=' + value);
        Reflect.set(target, propKey, value, receiver);
    }
});
p.age = '20';
console.log(p.age);
p.newPropKey = '新属性';
console.log(p.newPropKey);
```

可以看到，新增的属性，并不需要重新添加响应式处理，因为 Proxy 是对对象的操作，只要你访问对象，就会走到 Proxy 的逻辑中。


::: tip Reflect

 Reflect(ES6引入) 是一个内置的对象，它提供拦截 JavaScript 操作的方法。将Object对象一些明显属于语言内部方法（比如Object.defineProperty()）放到Reflect对象上。修改某些Object方法的返回结果，让其变得更合理。让Object操作都变成函数行为。具体内容查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

:::

##  总结

1. Proxy是用来操作对象的，拓展对象的能力。Object.defineProperty() 是对对象属性进行操作。
2. vue2.x使用 Object.defineProperty()实现数据的响应式，但是由于 Object.defineProperty()是对对象属性的操作，所以需要对对象进行深度遍历去对属性进行操作。
3. vue3.0 用 Proxy 是对对象进行拦截操作，无论是对对象做什么样的操作都会走到 Proxy 的处理逻辑中
4. vue3.0、dobjs/dob、immer等库目前都使用到了 Proxy，对对象进行读写拦截，做一些额外的处理。