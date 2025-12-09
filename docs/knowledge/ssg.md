# SSG 

我们重新对 SSR 进行审视，服务端渲染出的页面，逻辑上讲可以分成下面两大块：

1、变化不频繁，甚至不会变化的内容：例如文章、排行榜、商品信息、推荐列表等等，这些数据非常适合缓存；

2、变化比较频繁，或者千人千面的内容：例如用户头像、Timeline、登录状态、实时评论等。

例如，在一篇文章的页面中，文章的主题内容是偏向于静态的，很少有改动，那么每次用户的页面请求，都通过服务端来渲染就变得非常不值得，因为每次服务端渲染出来大部分内容都是一样的！

我们完全可以将文章的页面渲染为静态页面，至于页面内那些动态的内容（用户头像、评论框等），就通过 HTTP API 的形式进行浏览器端渲染（CSR）：

![](../images/ssg1.png)



这样做有很多好处：

1、由于文章内容已经被静态化了，所以它是 SEO 友好的，能被搜索引擎轻松爬取；

2、大大减轻了服务端渲染的资源负担，不需要额外做一套 Node.js 服务；

3、用户始终通过 CDN 加载页面核心内容，CDN 的边缘节点有缓存，速度极快；

4、通过 HTTP API + CSR，页面内次要的动态内容也可以被很好地渲染；

5、数据有变化时，重新触发一次网站的异步渲染，然后推送新的内容到 CDN 即可。

6、由于每次都是全站渲染，所以网站的版本可以很好的与 Git 的版本对应上，甚至可以做到原子化发布和回滚。

这便是 Gatsby.js、Next.js 这样的网站生成器解决的问题，他们属于 React/Vue 更上一层的框架（Meta Framework），通过 SSR 把动态化的 Web 应用渲染为多个静态页面，并且对高度动态的内容也保留了 CSR 的能力。


## 从 SSG 到 ISR/DPR

细心的同学一定发现了 SSG 这样的模式，看似美好，但存在一个瑕疵：

对于只有几十个页面的个人博客、小型文档站而言，数据有变化时，跑一次全页面渲染的消耗是可以接受的。

但对于百万级、千万级、亿级页面的大型网站而言，一旦有数据改动，要进行一次全部页面的渲染，需要的时间可能是按小时甚至按天计的，这是不可接受的。

为了解决这个问题，各种框架和静态网站托管平台都提供了不同的方案，这里我们介绍 ISR 和 DPR 两种。

ISR：Incremental Site Rendering

既然全量预渲染整个网站是不现实的，那么我们可以做一个切分：

1、关键性的页面（如网站首页、热点数据等）预渲染为静态页面，缓存至 CDN，保证最佳的访问性能；

2、非关键性的页面（如流量很少的老旧内容）先响应 fallback 内容，然后浏览器渲染（CSR）为实际数据；同时对页面进行异步预渲染，之后缓存至 CDN，提升后续用户访问的性能。

![](../images/ssg2.png)

页面的更新遵循 stale-while-revalidate 的逻辑，即始终返回 CDN 的缓存数据（无论是否过期）；如果数据已经过期，那么触发异步的预渲染，异步更新 CDN 的缓存。

![](../images/ssg3.png)
这就是增量式更新（ISR）的概念，这个概念最早由 Next.js 在 9.5 版本中提出，下面是一个小 Demo：

Static Reactions Demo：https://reactions-demo.vercel.app/

在 Next.js 中，你可以使用 getStaticPaths() 来定义哪些路径需要预渲染，通过 getStaticProps() 来获取预渲染需要的数据：

```js
// 定义哪些页面需要预渲染
export async function getStaticPaths() {
  return {
    // 只有 /posts/1 和 /posts/2 会被预渲染
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // 其它页面，如 /posts/3，都会返回 fallback 页面，然后 CSR
    fallback: true,
  }
}

// 定义预渲染需要的数据
export async function getStaticProps({ params }) {
  // 拉取对应的文章内容
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  return {
    props: { post },
    revalidate: 60 // 数据有效期为 60 秒
  }
}
 
```

但 ISR 存在部分缺陷：

1、对于没有预渲染的页面，用户首次访问将会看到一个 fallback 页面，此时服务端才开始渲染页面，直到渲染完毕。这就导致用户体验上的不一致。

2、对于已经被预渲染的页面，用户直接从 CDN 加载，但这些页面可能是已经过期的，甚至过期很久的，只有在用户刷新一次，第二次访问之后，才能看到新的数据。对于电商这样的场景而言，是不可接受的（比如商品已经卖完了，但用户看到的过期数据上显示还有）。

::: tip 说明
  
 具体关于 ISR 的利弊，可以进一步看 Netlify 的这篇文章：

 Incremental Static Regeneration: Its Benefits and Its Flaws：

 https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/

:::

DPR：Distributed Persistent Rendering

为了解决 ISR 的一系列问题，Netlify 在前段时间发起了一个新的提案：

::: tip 说明
  
 Distributed Persistent Rendering (DPR)

 https://github.com/jamstack/jamstack.org/discussions/549

 DPR 本质上讲，是对 ISR 的模型做了几处改动，并且搭配上 CDN 的能力：

:::

1、去除了 fallback 行为，而是直接用 On-demand Builder（按需构建器）来响应未经过预渲染的页面，然后将结果缓存至 CDN；

2、数据页面过期时，不再响应过期的缓存页面，而是 CDN 回源到 Builder 上，渲染出最新的数据；

3、每次发布新版本时，自动清除 CDN 的缓存数据。

![](../images/ssg4.png)

在 Netlify 平台上，你可以像这样定义一个 Builder，用于预渲染或者实时渲染。这个 Builder 将会以 Serverless 云函数的方式在平台上运行：

```js
const { builder } = require("@netlify/functions")

async function handler(event, context) {

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
      <html>
        <body>
          Hello World
        </body>
    </html>
    `,
  };
}

exports.handler = builder(handler);

```

更多详细信息可以参考文档：https://docs.netlify.com/configure-builds/on-demand-builders/

当然 DPR 还在很初期的阶段，就目前的讨论来看，依然有一些问题：

新页面的访问可能会触发 On-demand Builder 同步渲染，导致当次请求的响应时间比较长；
比较难防御 DoS 攻击，因为攻击者可能会大量访问新页面，导致 Builder 被大量并行地运行，这里需要平台方实现 Builder 的归一化和串行运行。

# 总结

Jamstack 这套技术栈在国外的流行，很大程度上得益于近年来相关云服务和云平台的成熟：

* 新一代的 CDN 技术，包括更高级、更精细的缓存控制能力；
* Serverless形态的计算服务（如云开发CloudBase提供的云函数与云托管功能），让 SSR 和 SSG 免于服务器运维的苦恼，开发者只需要重点关注前台逻辑；
* 越来越丰富的 BaaS 提供方，提供了包括数据存储、鉴权、电商、CMS、音视频、AI 等等“中台化”的能力，开发者只需要组合这些 BaaS 服务，专注于自身的业务逻辑即可。
Jamstack 非常适合以呈现内容为主的网站，如文档、博客、电商网站、论坛、官网等等，所以更多地应该将它视为“建站技术”，是目前诸多建站技术栈（LAMP、MEAN等等）的一个新生替代品。极低的运维成本、Serverless、快速、安全、且不损失网站的动态性，是它的核心优势。

当然它本身并不是完美的，SSG、ISR、DPR 这些解决方案，都或多或少有一些瑕疵和问题，它们本质上就是在平衡动态性、渲染性能、缓存性能这三个矛盾点，依然需要继续探索和演进下去。

另外，除了上文提到的 Netlify 和 Vercel 这两家小而美的平台以外，国外的几家大型云厂商（GCP、AWS、Azure）也提供了类似的产品，向 Web 前端开发者提供对 Jamsatck 等新生代技术栈的支持：

Firebase Hosting
Azure Static Web Apps
AWS Amplify
国内市场上，这块产品目前还处于缺位的状态，虽然底层的 IaaS 能力（对象存储、CDN、Serverless、网关等等）都趋近于完善，但还缺少能够把这些能力组合封装起来的一层，前段时间我也表达过类似的想法：

::: tip 说明
“经常看到有人讨论为啥国内没有netlify、vercel这样的web托管产品，其实在国内要做个类似的东西还真没那么容易，起码要打通 CDN、对象存储、Serverless、API网关，正式产品化的话还要考虑计费、安全、用户隔离等等，能完整提供这套基建的国内厂商就AT两家，并且边边角角上还缺了挺多能力的。”
:::

当然除了技术层面的原因外，国内外的市场、网络环境、技术生态都是完全不同的，仅仅是 “Copy to China” 的方式很可能会导致产品水土不服，不过这就超出本文的范畴了。