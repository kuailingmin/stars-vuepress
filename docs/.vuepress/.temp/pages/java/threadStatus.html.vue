<template><div><h1 id="线程的状态" tabindex="-1"><a class="header-anchor" href="#线程的状态"><span>线程的状态</span></a></h1>
<p><img src="https://i.loli.net/2018/12/18/5c18688584a91.png" alt="线程状态图"></p>
<h4 id="_1、新建状态-new" tabindex="-1"><a class="header-anchor" href="#_1、新建状态-new"><span>1、新建状态(New)</span></a></h4>
<blockquote>
<p>万事万物都不是凭空出现的，线程也一样，它被创建后的状态称为 <strong>新建</strong> 状态。</p>
</blockquote>
<p>比如：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2、可运行状态-runable" tabindex="-1"><a class="header-anchor" href="#_2、可运行状态-runable"><span>2、可运行状态(Runable)</span></a></h4>
<blockquote>
<p>线程被创建后是不能使用的，就是让用户在此期间设置一些属性，</p>
</blockquote>
<p>比如：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// 设置类加载器</span></span>
<span class="line">thread<span class="token punctuation">.</span><span class="token function">setContextClassLoader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 设置线程名称</span></span>
<span class="line">thread<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"商品服务-product-service"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 是否为守护线程/用户线程</span></span>
<span class="line">thread<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 设置线程优先级</span></span>
<span class="line">thread<span class="token punctuation">.</span><span class="token function">setPriority</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>thread.start()</code> 方法开启线程，开启后意味着该线程 <strong>“能够”</strong> 运行，并不意味着一定会运行，因为它要抢占资源，获取CPU的使用权后，才能运行。所以此状态称为 <strong>可运行状态</strong>。从上图中可以看出，不仅通过 <code v-pre>start()</code> 启动一个线程后可以进入 Runnable 状态，还可以通过其他方式到达 Runnable 状态。</p>
<h4 id="_3、运行状态-running" tabindex="-1"><a class="header-anchor" href="#_3、运行状态-running"><span>3、运行状态(Running)</span></a></h4>
<blockquote>
<p>线程通过努力，获得了CPU的使用权，就会进入执行程序，此时状态被称为 <strong>运行状态</strong>。</p>
</blockquote>
<h4 id="_4、阻塞状态-blocked" tabindex="-1"><a class="header-anchor" href="#_4、阻塞状态-blocked"><span>4、阻塞状态(BLOCKED)</span></a></h4>
<blockquote>
<p>多线程抢占CPU资源，同一时刻仅有一个线程进入临界区，为保证对资源访问的线程安全，同一时刻仅有一个线程进入 synchronized 同步块，而其他未获得访问权的线程将进入 <strong>阻塞状态</strong> 。</p>
</blockquote>
<p><strong>等待阻塞</strong>：通过调用线程的wait()方法，让线程等待某工作的完成。</p>
<p><strong>同步阻塞</strong>：线程在获取synchronized同步锁失败(因为锁被其它线程所占用)，它会进入同步阻塞状态。</p>
<p><strong>其他阻塞</strong>：通过调用线程的sleep()或join()或发出了I/O请求时，线程会进入到阻塞状态。当sleep()状态超时、join()等待线程终止或者超时、或者I/O处理完毕时，线程重新转入就绪状态。</p>
<h4 id="_5、睡眠状态-timed-waiting-sleeping" tabindex="-1"><a class="header-anchor" href="#_5、睡眠状态-timed-waiting-sleeping"><span>5、睡眠状态 TIMED_WAITING(sleeping)</span></a></h4>
<blockquote>
<p>通过调用对象的wait(time)方法或调用线程的sleep(time)/join(time)，等待/睡眠指定的时间，此时该线程会进入TIMED_WAITING(sleeping) 状态，直接时间已到，会进入Runnable状态，重新抢占CPU资源。</p>
</blockquote>
<h4 id="_6、等待状态-waiting" tabindex="-1"><a class="header-anchor" href="#_6、等待状态-waiting"><span>6、等待状态 WAITING</span></a></h4>
<blockquote>
<p>通过调用对象的wait()方法，让抢占资源的线程等待某工作的完成，或主动join()其他线程，让当前线程释放资源等待被join的线程完成工作，而该线程将进入 <strong>等待状态</strong> 。</p>
</blockquote>
<h4 id="_7、死亡状态-dead" tabindex="-1"><a class="header-anchor" href="#_7、死亡状态-dead"><span>7、死亡状态(Dead)</span></a></h4>
<blockquote>
<p>线程执行完了或者因异常退出了run()方法，该线程结束生命周期。</p>
</blockquote>
</div></template>


