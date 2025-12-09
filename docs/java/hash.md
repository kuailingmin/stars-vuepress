# HashMap,HashTable,ConcurrentHashMap

<h3>一、非线程安全的HashMap</h3>


> * `jdk1.7` 的 `HashMap` 的底层实现是 **数组** + **单向链表**，支持key为 `null`，value 为`null`。
> * 它的初始容量是 `16`，负载因子默认值 `0.75`，当实际存放元素数量大于等于 **阈值**，（而且新元素被放入的哈希槽不为空），那么就会触发扩容，每次扩容时的容量都是翻倍增长（一定是 `2`的次幂）,所以在实例存储元素项较多的情况下，一定要指定初始容量，避免每次扩容带来性能上的影响。
> * **负载因子** 取值问题也是一个重要原因，取值越大**哈希冲突** 的概率就越高，取值越小空间浪费度就越高。而 `0.75` 是一个比较折中的选择。
> * 其属性、方法、代码块没有被 `synchronize`修饰，也没有使用其他同步机制，在多线程环境下是 **非线程安全**的。



<h3>二、线程安全的Hashtable</h3>

> `Hashtable` 是`HashMap` 线程安全的实现。它也起始于 **上古时期**，可追溯到` jdk1.0`。（:no_good:注意是 `Hashtable` 而非 ~~HashTable~~）

```java
public class Hashtable<K,V>
    extends Dictionary<K,V>
    implements Map<K,V>, Cloneable, java.io.Serializable
```

> `Hashtable` 扩展至 `Dictionary` 抽象类、实现至`Map` 接口。

* `Hashtable` 线程安全的实现机制是 **几乎**在所有的方法都加:poop: `synchronized` 修饰；
* `HashMap` 允许 key 和 value 都可以是 `null` 值，但 `Hashtable` 对 key 、value都不允许:sob::broken_heart:为 ~~null~~；
* `Hashtable` 初始容量是`11` ，默认负载因子也是 `0.75`。扩容是 `2倍 + 1`；

处处加锁:lock:的`Hashtable` 虽然保证了同步性，但性能大大折扣，再并发的情况下有些不可取。

`jdk1.5` 又引入了新的线程安全容器:sunny: `ConcurrentHashMap`，用于替代性能差的 `Hashtable`。`ConcurrentHashMap` 为什么能够取代 `Hashtable`呢？因为它在保证性能安全的情况下、性能还比`Hashtable`好。