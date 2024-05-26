import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: 'blog2hj',
  lang: 'zh-CN',
  title: 'Blog',
  description: '这是我的第一个 VuePress 站点',

  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
        {text: '首页',link: '/',},
        {text: 'Music',link: '/pages/test.md'},
        {
          text: 'Java',
          // link: '/pages/test.md'
          collapsible: true,
          children: [
            {text: "Java基础",sidebarDepth: 1,link: "/pages/java/JavaPage1.md",},
            {text: "Rpc示例",sidebarDepth: 1,link: "/pages/java/Rpc.md",}
          ]
      }
      ],
      
      sidebar: {
       '':[
        {
            text: 'Cloudflare',
            // 是否折叠
            collapsible: false,
            children: [
              {
                text: "workers",
                collapsible: true,
                sidebarDepth: 1,
                // link: "/pages/test.md",
                children: [   // 子菜单
                  {text: "hel2",sidebarDepth: 2,link: "/pages/cloudflare/workers/hel2.md",},
                  {text: "hel3",sidebarDepth: 2,link: "/pages/cloudflare/workers/hel3.md",},
                  {text: "hel4",sidebarDepth: 2,link: "/pages/cloudflare/workers/hel4.md",},
                ],  
              },
              {
                text: "pages",
                collapsible: true,
                sidebarDepth: 1,
                // link: "/pages/pages.md",
                children: [
                  {text: 'pages1',sidebarDepth:1,link:'/pages/cloudflare/pages/pages1.md'}
                ],
              },
              {
                text: "site",
                collapsible: true,
                sidebarDepth: 1,
                // link: "/pages/pages.md",
                children: [
                  {text: 'site1',sidebarDepth:1,link:'/pages/cloudflare/site/site1.md'}
                ],
              },
              {
                text: "fofa",
                collapsible: true,
                sidebarDepth: 1,
                // link: "/pages/pages.md",
                children: [
                  {text: 'fofa',sidebarDepth:1,link:'/pages/cloudflare/fofa/fofa.md'}
                ],   //子菜单
              }
            ],
          },
          
       ]
      }
        

  }),
})
