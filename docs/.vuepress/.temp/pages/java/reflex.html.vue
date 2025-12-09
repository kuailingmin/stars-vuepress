<template><div><h1 id="反射机制" tabindex="-1"><a class="header-anchor" href="#反射机制"><span>反射机制</span></a></h1>
<blockquote>
<p><em>Java反射机制</em> 是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种 <strong>动态</strong> 获取的信息以及动态调用对象的方法的功能称为java语言的 <strong>反射机制</strong>。</p>
</blockquote>
<h3 >获取Class类对象的三种方式</h3>
<blockquote>
<p>万物皆对象，包括 <em>类</em> 也有对象，称为 <strong>类对象</strong>。要想获取类的信息首先要获取 <strong>类</strong>。</p>
</blockquote>
<h4 id="class类的与反射有关的重要方法" tabindex="-1"><a class="header-anchor" href="#class类的与反射有关的重要方法"><span>Class类的与反射有关的重要方法：</span></a></h4>
<table>
<thead>
<tr>
<th>返回类型</th>
<th>方法名</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>static Class&lt;?&gt;</td>
<td>forName(String className)</td>
<td>返回给定字符串(全限定类名)的对应类的类对象</td>
</tr>
<tr>
<td>static Class&lt;?&gt;</td>
<td>forName(String name, boolean initialize, ClassLoader loader)</td>
<td>给定是否初始化、类加载器，返回给定字符串(全限定类名)的对应类的类对象</td>
</tr>
<tr>
<td>AnnotatedType[]</td>
<td>getAnnotatedInterfaces()</td>
<td>返回 AnnotatedType对象的数组。</td>
</tr>
<tr>
<td>AnnotatedType</td>
<td>getAnnotatedSuperclass()</td>
<td>返回父类的注解的AnnotatedType。</td>
</tr>
<tr>
<td>A</td>
<td>getAnnotation(Class annotationClass)</td>
<td>返回指定类型的注释，如果不存在则返回null。</td>
</tr>
<tr>
<td>Annotation[]</td>
<td>getAnnotations()</td>
<td>过去该对象上的注解，以注解数组的形式返回。</td>
</tr>
<tr>
<td>A[]</td>
<td>getAnnotationsByType(Class annotationClass)</td>
<td>返回类/接口内部类的、从父类/接口继承的内部类的数组。</td>
</tr>
<tr>
<td>Class&lt;?&gt;[]</td>
<td>getClasses()</td>
<td>返回类/接口内部类的、从父类/接口继承的内部类的数组</td>
</tr>
<tr>
<td>ClassLoader</td>
<td>getClassLoader()</td>
<td>返回该类的类加载器。</td>
</tr>
<tr>
<td>Class&lt;?&gt;</td>
<td>getComponentType()</td>
<td>返回表示数组组件类型的 Class。如果此类表示数组类，返回表示此类组件类型的 Class。否则返回null。</td>
</tr>
<tr>
<td>Constructor</td>
<td>getConstructor(Class&lt;?&gt;... parameterTypes)</td>
<td>通过指定参数类型，返回一个 Constructor 公共构造方法类的类对象。</td>
</tr>
<tr>
<td>Constructor&lt;?&gt;[]</td>
<td>getConstructors()</td>
<td>返回一个包含所有 Constructor 公共构造方法类的类对象数组。</td>
</tr>
<tr>
<td>A</td>
<td>getDeclaredAnnotation(Class annotationClass)</td>
<td>返回直接存在于此元素上的该类型注释。</td>
</tr>
<tr>
<td>Annotation[]</td>
<td>getDeclaredAnnotations()</td>
<td>返回直接存在于此元素上的所有注释。</td>
</tr>
<tr>
<td>A[]</td>
<td>getDeclaredAnnotationsByType(Class annotationClass)</td>
<td>返回指定注解类型的存在于此元素上的注解数组。</td>
</tr>
<tr>
<td>Class&lt;?&gt;[]</td>
<td>getDeclaredClasses()</td>
<td>返回类定义的公共的内部类，不包括继承的。</td>
</tr>
<tr>
<td>Constructor&lt;?&gt;[]</td>
<td>getDeclaredConstructors()</td>
<td>返回 Constructor 对象的一个数组，这些对象反映此 Class 对象表示的类声明的所有构造方法。不仅是公共的。</td>
</tr>
<tr>
<td>Field</td>
<td>ggetDeclaredField(String name)</td>
<td>返回一个 Field 对象，该对象反映此 Class 对象所表示的类或接口的指定已声明字段</td>
</tr>
<tr>
<td>Field[]</td>
<td>getDeclaredFields()</td>
<td>返回 Field 对象的一个数组，这些对象反映此 Class 对象所表示的类或接口所声明的所有字段。</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Method</td>
<td>getDeclaredMethod(String name, Class&lt;?&gt;... parameterTypes)</td>
<td>返回一个 Method 对象，该对象反映此 Class 对象所表示的类或接口的指定已声明方法。</td>
</tr>
<tr>
<td>Method[]</td>
<td>getDeclaredMethods()</td>
<td>返回 Method 对象的一个数组，这些对象反映此 Class 对象表示的类或接口声明的所有方法，包括公共、保护、默认（包）访问和私有方法，但不包括继承的方法。</td>
</tr>
</tbody>
</table>
<h4 id="获取class类对象方式一" tabindex="-1"><a class="header-anchor" href="#获取class类对象方式一"><span>获取Class类对象方式一：</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 通过类的全限定类名(包名+类名)获取类</span></span>
<span class="line"><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"类的全限定类名(包名+类名)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取class类对象方式二" tabindex="-1"><a class="header-anchor" href="#获取class类对象方式二"><span>获取Class类对象方式二：</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 直接获取类</span></span>
<span class="line"><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取class类对象方式三" tabindex="-1"><a class="header-anchor" href="#获取class类对象方式三"><span>获取Class类对象方式三：</span></a></h4>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 通过实例对象获取其类</span></span>
<span class="line"><span class="token class-name">Class</span> clazz <span class="token operator">=</span> object<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>*根据类加载机制，运行时一个类仅有一个类对象。</p>
<h3>java.lang.reflect 包中的类</h3>
<blockquote>
<p>万物皆对象，不仅 <em>类</em> 有类对象，类的方法、字段，甚至修饰符都可以有 <em>对象</em>。</p>
<p><em>java.lang.reflect</em> 包提供了用于通过反射获取 <em>类信息(方法、属性、修饰符、参数等)<em>的类、接口、异常。下面主重介绍一下有关反射的</em>类</em>：</p>
</blockquote>
<table>
<thead>
<tr>
<th>类</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>AccessibleObject</td>
<td>AccessibleObject类是Field，Method和Constructor对象的基类。 它提供了将反射的对象标记为在使用时取消默认 Java 语言访问控制检查的能力。对于公共成员、默认（包）访问成员、受保护成员和私有成员，在分别使用 Field、Method 或 Constructor 对象来设置或获得字段、调用方法，或者创建和初始化类的新实例的时候，会执行访问检查。</td>
</tr>
<tr>
<td>Array</td>
<td>Array类提供静态方法来动态创建和访问Java数组。它允许在获取或设置操作期间扩大转换，但如果发生缩小转换，则抛出IllegalArgumentException 。</td>
</tr>
<tr>
<td>Constructor</td>
<td>Constructor提供了一个类的单个构造函数的信息和访问。</td>
</tr>
<tr>
<td>Executable</td>
<td>用于 Method 和 Constructor的公共功能的共享超类。（jdk1.8 新加的类）</td>
</tr>
<tr>
<td>Field</td>
<td>Field提供有关类或接口的单个字段的信息和动态访问。 反射的字段可以是类（静态）字段或实例字段。</td>
</tr>
<tr>
<td>Method</td>
<td>Method 提供有关类和接口上单一方法的信息和访问权限。 反映的方法可以是类方法或实例方法（包括抽象方法）。</td>
</tr>
<tr>
<td>Modifier</td>
<td>Modifier类提供了static方法和常量来解码类和成员访问修饰符。 修饰符集合被表示为具有表示不同修饰符的不同位位置的整数。</td>
</tr>
<tr>
<td>Parameter</td>
<td>有关方法参数的信息。 Parameter提供了有关方法参数的信息，包括其名称和修饰符。 它还提供了获取参数属性的替代方法。</td>
</tr>
<tr>
<td>Proxy</td>
<td>Proxy提供了创建动态代理类和实例的静态方法，它也是由这些方法创建的所有动态代理类的超类。（*关于Proxy的使用及动态代理模式，我会单独拿出一篇文章讲解，详见：https://github.com/about-cloud/JavaCore）</td>
</tr>
<tr>
<td>ReflectPermission</td>
<td>反射操作的权限类。</td>
</tr>
</tbody>
</table>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h4>
<h3>反射的实际操作</h3>
<h4 id="案例1" tabindex="-1"><a class="header-anchor" href="#案例1"><span>案例1：</span></a></h4>
<blockquote>
<p>现在有个需求，想获取一个 用户实体 中所有的字段。</p>
</blockquote>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>foovv<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 用户实体类</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@author</span> 代码风水师</span>
<span class="line"> * <span class="token keyword">@version</span> jdk1.8</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** 用户id */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/** 用户名称 */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/** 用户性别 */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> userGender<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/** 用户年龄 */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> userAge<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/** 用户邮箱 */</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* getter &amp; setter 方法略 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>foovv<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** 要反射类中的字段，就要引入reflect.Field类 */</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 反射字段的demo</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@author</span> 代码风水师</span>
<span class="line"> * <span class="token keyword">@version</span> jdk1.8</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReflectDemo</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 1、要想获取类的字段，就先要获取该类。下面通过全限定类名来获取的。</span></span>
<span class="line">        <span class="token class-name">Class</span> user <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.foovv.example.User"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">// 2、上面已得到User类的类对象，那么下面就获取其所有字段的类对象数组</span></span>
<span class="line">        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 3、遍历字段的数组集合，一个一个字段去处理</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> field <span class="token operator">:</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 此处的是打印User类对象中的字段名称</span></span>
<span class="line">            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>field<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre v-pre><code class="language-mysql"><span class="line">id</span>
<span class="line">userName</span>
<span class="line">userGender</span>
<span class="line">userAge</span>
<span class="line">email</span>
<span class="line"></span>
<span class="line">Process finished with exit code 0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例2" tabindex="-1"><a class="header-anchor" href="#案例2"><span>案例2：</span></a></h4>
<blockquote>
<p>在很多框架中，常使用注解来标记类、方法、字段的特征。比如持久化框架常用来反射生成SQL，下面就动手实战一下：</p>
</blockquote>
<p>实体：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>foovv<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token doc-comment comment">/** 描述略 */</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> userGender<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> userAge<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* getter &amp; setter 方法略 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过反射生成SQL语句：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre v-pre><code class="language-mysql"><span class="line">SELECT id, user_name, user_gender, user_age,email FROM user;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>1、定义两个注解类，一个注解类Table标注实体对应的表名，另一个注解类Column标注对应的数据表的列名：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Table</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Column</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、对实体类及其字段使用注解标注：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span><span class="token string">"user_name"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span><span class="token string">"user_gender"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> userGender<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span><span class="token string">"user_age"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> userAge<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">   <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span><span class="token string">"email"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* getter &amp; setter 方法略 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、上面做了处理，下面开始对这个实体类做反射、获取注解：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReflectSql</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 拼接的SQL</span></span>
<span class="line">        <span class="token class-name">StringBuilder</span> sql <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 1、要想获取类的字段，就先要获取该类。下面通过全限定类名来获取的。</span></span>
<span class="line">        <span class="token class-name">Class</span> user <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.foovv.example.User"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 2、获取实体类上的Table注解，然后通过value()获取对应的表名</span></span>
<span class="line">        <span class="token comment">// 当前你也可以使用getDeclaredAnnotations()获取注解数组，然后遍历</span></span>
<span class="line">        <span class="token class-name">Table</span> table <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Table</span><span class="token punctuation">)</span> user<span class="token punctuation">.</span><span class="token function">getDeclaredAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Table</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">String</span> tableName <span class="token operator">=</span> table<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 3、获取字段上的注解，然后获取通过value()获取对应的数据表的列名</span></span>
<span class="line">        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"SELECT "</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 遍历每个字段</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> fields<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取字段上Column注解</span></span>
<span class="line">            <span class="token class-name">Column</span> column <span class="token operator">=</span> fields<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Column</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 进而获取value()值，既对应指定的数据表列名</span></span>
<span class="line">            <span class="token comment">// 拼接SQL</span></span>
<span class="line">            sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>column<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> fields<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">" FROM "</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>tableName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        sql<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">";"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre v-pre><code class="language-mysql"><span class="line">SELECT id, user_name, user_gender, user_age, email FROM user;</span>
<span class="line"></span>
<span class="line">Process finished with exit code 0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


