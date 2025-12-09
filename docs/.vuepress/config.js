import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'F2E-Stars',
  description: '前端之路好比一把菜刀，你想的是做饭，而我想的是作战！',
  theme: defaultTheme({
    logo: '',
    navbar: [
      '/',
      { 
        text: "AI",
        prefix: "/AI/",
        children: [
         'ragflow.md'
        ]
      },
      { 
        text: "vue3",
        prefix: "/vue3/",
        children: [
          'base.md',
          'dom.md',
          'compositionApi.md',
          'defineEmit.md',
          'css.md',
          'i18n.md',
          'lifeCycle.md',
          'proxy.md',
          'responsive.md',
          'routerCan.md',
          'setup.md',
          'timeSection.md',
          'router.md',
          'effect.md',
          'summary.md'
        ]
      },
      { 
        text: "vue2",
        prefix: "/vue2/",
        children: [
         'base.md'
        ]
      },
      { 
        text: "react",
        prefix: "/react/",
        children: [
         'base.md',
         'obsolete.md',
         'render.md',
         'setState.md'
        ]
      },
      { 
        text: "pinia",
        prefix: "/pinia/",
        children: [
         'base.md',
         'defineStore.md',
         'diffVuex.md',
        ]
      },
      { 
        text: "vuex",
        prefix: "/vuex/",
        children: [
         'base.md',
         'mapActions.md',
         'mapGetters.md',
         'mapMutations.md',
         'mapState.md',
        ]
      },
      { 
        text: "starsUi",
        prefix: "/starsUi/",
        children: [
         'base.md',
      
        ]
      },
      { 
        text: "starsUse",
        prefix: "/starsUse/",
        children: [
         'base.md',
         'useJump.md',
         'useToggle.md'
        ]
      },
      { 
        text: "lit",
        prefix: "/lit/",
        children: [
         'base.md',
         'demo.md'
        ]
      },
      { 
        text: "uniStars小程序",
        prefix: "/small/",
        children: [
         'uni.md',
         'header.md'
        ]
      },
      { 
        text: "前端国际化",
        prefix: "/il8/",
        children: [
         'base.md',
        ]
      },
      { 
        text: "微前端",
        prefix: "/tiny/",
        children: [
         'base.md',
        ]
      },
      {
        text: "前端规范",
        prefix: "/standard/",
        children: [
         'base.md',
         'git.md'
        ]
      },
      { 
        text: "前端知识点",
        prefix: "/knowledge/",
        children: [
         'changeEvent.md',
         'cssQuery.md',
         'eventLoop.md',
         'grammar.md',
         'http.md',
         'interrupt.md',
         'isWebsocket.md',
         'jsdemo.md',
         'jsMethod.md',
         'meta.md',
         'multifile.md',
         'ssg.md',
         'ssr.md',
         'symbol.md',
         'mediaDevices.md'
        ]
      },
      { 
        text: "jnpf",
        prefix: "/jnpf/",
        children: [
         'base.md',
         'handlebars.md'
        ]
      },
      { 
        text: "前端工程",
        prefix: "/project/",
        children: [
         'plop.md',
         'commit.md'
        ]
      },
      { 
        text: "hzero",
        prefix: "/hzero/",
        children: [
         'api.md',
         'branch.md',
         'internation.md',
         'lov.md',
         'renders.md',
         'workplace.md',
        ]
      },
      { 
        text: "Java",
        prefix: "/java/",
        children: [
         'binartTree.md',
         'class.md',
         'hash.md',
         'jvmTime.md',
         'lru.md',
         'sort.md',
         'threadStatus.md'
        ]
      },
      
    ],
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})
