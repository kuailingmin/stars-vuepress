<template><div><h1 id="类加载机制" tabindex="-1"><a class="header-anchor" href="#类加载机制"><span>类加载机制</span></a></h1>
<p>从写好的代码到被执行完成，这都与类加载器机制密不可分。就像我们吃食物一样，先用筷子/勺子/叉子将食物放入嘴中，然后通过舌头上的味觉器官验证食物好不好吃、有没有变馊。</p>
<p>Java的 <strong>“动态性”</strong> 表现在依赖运行期动态加载和动态链接的特点实现。</p>
<p>首先， Java 编译器将Java源代码（.java 文件）编译成 Java字节码（.class 文件）。类加载器负责读取 .class 文件（不限于.class文件），并转换成 <code v-pre>java.lang.Class</code>类的一个实例。每个这样的实例用来表示一个 class类。所有的类加载器都是 <code v-pre>java.lang.ClassLoader</code>类的一个实例。</p>
<h3>一、类加载过程</h3>
<p><img src="@source/images/class1.png" alt="类加载过程"></p>
<h4 id="_1-1、加载" tabindex="-1"><a class="header-anchor" href="#_1-1、加载"><span>1.1、加载</span></a></h4>
<p><strong>&quot;类加载&quot;</strong> 过程比较多，而加载是其中第一个步骤，负责将.class文件加载至内存，但又不仅可以从本地 <code v-pre>.class</code> 文件加载一个类或接口，也可以从JAR包、WAR包、远程网络资源获取并加载到虚拟机，通过动态代理技术可以在运行时动态生成。比如JSP文件也可以生成对应的Class类。</p>
<h4 id="_1-2、验证" tabindex="-1"><a class="header-anchor" href="#_1-2、验证"><span>1.2、验证</span></a></h4>
<p><img src="https://i.loli.net/2018/12/17/5c179c6357781.jpeg" alt="验证"></p>
<p>对加载的Class信息首先要做验证，检测文件格式、元数据、字节码等信息是否合法，是否符合虚拟机的最低要求，校验文件是否对虚拟机有害。</p>
<h4 id="_1-3、准备" tabindex="-1"><a class="header-anchor" href="#_1-3、准备"><span>1.3、准备</span></a></h4>
<p>前面的文章讲过，变量所需的内存大小在编译期就已经确定，而类加载的准备阶段是为类变量分配内存并设置类变量的初始值（区别于用户指定值），这些类变量的使用的内存区域是线程共享的方法区（Method Area）。</p>
<h4 id="_1-4、解析" tabindex="-1"><a class="header-anchor" href="#_1-4、解析"><span>1.4、解析</span></a></h4>
<p><img src="https://i.loli.net/2018/12/17/5c179d350dc8f.jpeg" alt="解析"></p>
<p>虚拟机将用于标识引用的符号替换为实际指向的引用的地址。符号或符号引用只不过是个标识（描述符），而实际地址才是真正的目的内存位置。</p>
<h4 id="_1-5、初始化" tabindex="-1"><a class="header-anchor" href="#_1-5、初始化"><span>1.5、初始化</span></a></h4>
<p>给类的静态变量初始化值，不同于准备阶段，此处是使用用于自定义的值进行赋值。</p>
<h3>二、双亲委派模型</h3>
<p><img src="https://i.loli.net/2018/12/17/5c17bc6c3f45c.png" alt="双亲委派模型"></p>
<p>一个类唯一存在虚拟机的判定，是由加载它的类加载器和这个类本身共同决定。如果同一个Class类文件由不同的类加载器加载至虚拟机，那么会存在两个不同的类。</p>
<p>那么如何保证相同的Class类文件均有同一个类加载器加载，而且存在多样化的加载器呢？</p>
<p>如上图所示，顶层的 <strong>Bootstrap ClassLoader</strong> 是启动类加载器，所有的类最终都是有它来加载，那么同一个的Class类文件无论加载多少次，仅在虚拟机存在一个类。其他类加载器直接或间接是启动类加载的器的子类。这是一个典型的树形数据结构，从树的每个节点向上遍历总能找到根节点。那么其他类加载器仅需要将类加载的工作向上委托，最终都会委托给启动类加载（根类加载器），这样的模型称为类加载的 <strong>双亲委派模型</strong> 。</p>
</div></template>


