// import flexSearchIndexOptions from "flexsearch";
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitepress';
import * as nav from './nav/main.mts';
import * as sidebar from './sidebar/main.mts';

// export default defineConfig({
export default defineConfig({
  vite: {
    plugins: [
      // PWA 配置区
      // - 官方中文手册：https://vite-pwa-org-zh.netlify.app/
      // - 这里使用 vite 通用包
      // - 你也可以使用 vitepress 框架包（@vite-pwa/vitepress）
      VitePWA({
        injectRegister: 'auto',
        registerType: 'prompt', // 有更新别偷偷刷新，得问问我（用户）同不同意
        base: '/',
        scope: '/',

        // includeAssets 配置静态资源缓存
        // - 缓存时机：Service Worker 安装阶段缓存
        // - 缓存范围：那些不经过构建处理的静态资源，通过此方式缓存
        // - 特别说明：在 vitepress 体现为 /public 目录下的静态资源
        includeAssets: [
          // 方式1：具体文件路径（明确指定每个文件）
          // 'static/logo.png',
          // 'static/svg/iis-light.svg',
          // 方式2：通配符模式（批量匹配）
          'static/**/*.{ico,png,jpg,svg}',
        ],

        // 开发环境专用，关掉烦人的警告
        devOptions: {
          enabled: true,
          suppressWarnings: true, // 开发时警告太多，眼花，先屏蔽
          navigateFallback: '/',
          type: 'module',
        },

        // Workbox 配置缓存策略
        // - 缓存范围：那些需要构建处理的静态资源，通过此方式缓存
        workbox: {
          // 预缓存策略
          // - 用于配置 Service Worker 安装阶段需要缓存的资源
          globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,gif,svg,woff2}'], // 需要缓存哪些类型的文件
          // 清理过期缓存，别占地方
          cleanupOutdatedCaches: true,
          // 跳过等待，立即激活新版本
          skipWaiting: true, // 别等新的Service Worker了，赶紧干活
          clientsClaim: true, // 新的 Service Worker 来了，立刻接管页面
          maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 单个文件最大10MB，再大就不缓存了
          // 运行时缓存策略
          // - 缓存范围：支持所有静态资源(不经过+经过构建处理的静态资源)
          // - 针对特定
          runtimeCaching: [
            // Google Fonts这类外部字体：缓存优先，存久点（一年），反正不常变
            {
              // 必需配置
              urlPattern: /\.(?:mp4)$/, // 正则表达式或函数
              handler: 'CacheFirst', // 策略名称

              // 可选配置
              options: {
                cacheName: 'google-fonts-cache', // 自定义缓存名称
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
              },
            },
            // 图片：缓存优先，但别存太久（30天），万一我换了图呢？
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images-cache',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 60 * 60 * 24 * 30,
                },
              },
            },
            // 注意：JS/CSS/HTML Workbox默认会处理，通常用 StaleWhileRevalidate 策略（缓存优先，后台更新）
          ],
        },
        // App清单，告诉系统“我是个App！”
        manifest: {
          short_name: '光明中医',
          name: '光明中医教材电子版',
          icons: [
            {
              src: '/static/logo.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/static/logo.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/static/logo.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/static/logo.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
          description:
            '光明中医教材是原光明中医函授大学在1985年成立后，由当时诸多顶尖中医专家齐心合力编写而成，在中医界一直享有崇高的地位，是难得的中医学习资料，得到李可老中医的强烈推荐。为避免教材失传，光明中医网校在范竹雯老师的指导下，进行了光明中医教材电子化工作。编写光明中医教材时，各位编者老师为了传承中医，都是义务奉献，未收取报酬。因此电子化后的教材也是公益性的，向社会免费开放，大家可以广为传播。我们希望中医学习者能人手一套教材用于学习。',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'fullscreen',
          orientation: 'any',
          start_url: '/',
          scope: '/',
        },
      }),
    ],
  },
  base: '/',
  ignoreDeadLinks: false, // 当设置为 true 时，VitePress 不会因为死链而导致构建失败。
  // 部分 markdown 文件不作为源内容输出的，需要排除
  srcExclude: [
    // '**/README.md'
  ],
  lang: 'zh-CN',
  title: '光明中医教材',
  description: '光明中医教材电子版，邀请大家共同来完善！',
  head: [['link', { rel: 'icon', href: '/static/favicon.png' }]],
  lastUpdated: false,
  markdown: {
    lineNumbers: false,
    math: false,
  },
  sitemap: {
    hostname: 'https://gmzyjc.e8so.com',
    lastmodDateOnly: false,
  },
  themeConfig: {
    logo: '/static/logo.png',
    lastUpdatedText: '最近更新',
    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    // --------- 仅移动端显示 start
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '栏目',
    returnToTopLabel: '返回顶部',
    // 仅移动端显示 end ---------
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/linjialiang/gmzyjc.git',
      },
      {
        icon: {
          svg: '<svg t="1685882013964" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7153" width="16" height="16" viewBox="0 0 16 16"><path d="M11.5286 1.87149C11.5769 1.73005 11.5356 1.5733 11.4233 1.47452C11.0472 1.14247 10.0965 0.443125 8.66911 0.339708C7.07054 0.223769 6.08089 0.652279 5.58096 0.969951C5.36531 1.10676 5.35326 1.41748 5.55499 1.57422L9.62723 4.73936C9.98617 5.01807 10.5125 4.8604 10.6591 4.43003L11.5286 1.87149Z" fill="#ff6200"></path><path d="M1.49017 11.2664C1.32368 11.3781 1.24855 11.584 1.30235 11.7774C1.45724 12.3339 1.91868 13.4919 3.22833 14.5456C4.53797 15.5992 6.08738 15.7128 6.74962 15.6966C6.94764 15.692 7.12016 15.5617 7.17998 15.3724L9.79046 7.11064C9.97875 6.51425 9.31048 6.01386 8.79154 6.3626L1.49017 11.2664Z" fill="#ff6200"></path><path d="M3.39813 2.54827C3.27013 2.49773 3.12683 2.50607 3.00579 2.57193C2.52256 2.83488 1.28526 3.64506 0.647135 5.30947C0.154627 6.59222 0.328071 8.01085 0.463488 8.70463C0.508009 8.9314 0.747306 9.06218 0.962489 8.97824L8.79485 5.92024C9.35414 5.70181 9.35646 4.91111 8.7981 4.6899L3.39813 2.54827Z" fill="#ff6200"></path><path d="M15.0167 8.46843C15.243 8.62194 15.5528 8.48652 15.5922 8.21569C15.6961 7.49872 15.7861 6.25076 15.371 5.30933C14.8177 4.05487 13.8786 3.28133 13.433 2.9669C13.292 2.86766 13.1019 2.87786 12.9725 2.99241L10.9959 4.74541C10.6732 5.03154 10.7066 5.54492 11.0636 5.78746L15.0167 8.46936V8.46843Z" fill="#ff6200"></path><path d="M9.49413 15.1604C9.47372 15.3937 9.67128 15.5866 9.90409 15.5616C10.6531 15.4813 12.1918 15.1841 13.3447 14.0827C14.467 13.0109 14.832 11.7384 14.9382 11.2319C14.9669 11.0951 14.9326 10.9528 14.8445 10.8442L11.3886 6.57909C11.0143 6.11719 10.2681 6.34535 10.2162 6.93757L9.49366 15.1604H9.49413Z" fill="#ff6200"></path></svg>',
        },
        link: 'https://cnb.cool/gmzyjx/gmzy',
      },
    ],
    editLink: {
      pattern: 'https://cnb.cool/gmzyjx/gmzy',
      text: '请在 光明中医教材官方仓库 提交bug',
    },
    outline: 'deep',
    i18nRouting: true,
    outlineTitle: '大纲',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '选择',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上切换',
              navigateDownKeyAriaLabel: '向下切换',
              closeText: '关闭',
              closeKeyAriaLabel: '关闭',
            },
          },
        },
      },
    },
    nav: [{ text: '主页', link: '/' }, ...nav.gmzyjc],
    sidebar: {
      // 入门系列
      '/gmzyjc/ok/gmzy/': sidebar.gmzy,
      '/gmzyjc/ok/rm/': sidebar.rm,
      '/gmzyjc/ok/zhencha/': sidebar.zhencha,
      // 第一学年
      '/gmzyjc/ok/zywx/': sidebar.zywx,
      '/gmzyjc/ok/gl/': sidebar.gl,
      '/gmzyjc/ok/qs/': sidebar.qs,
      '/gmzyjc/ok/kjn/': sidebar.kjn,
      '/gmzyjc/ok/lzcx/': sidebar.lzcx,
      // 第二学年
      '/gmzyjc/ok/hdnjs/': sidebar.hdnjs,
      '/gmzyjc/ok/shl/': sidebar.shl,
      '/gmzyjc/ok/jgyl/': sidebar.jgyl,
      '/gmzyjc/ok/wbtb/': sidebar.wbtb,
      '/gmzyjc/ok/bc/': sidebar.bc,
      // 第三学年
      '/gmzyjc/ok/nk/': sidebar.nk,
      '/gmzyjc/ok/wk/': sidebar.wk,
      '/gmzyjc/ok/gk/': sidebar.gk,
      '/gmzyjc/ok/yk/': sidebar.yk,
      '/gmzyjc/ok/fk/': sidebar.fk,
      '/gmzyjc/ok/ek/': sidebar.ek,
      // 第四学年
      '/gmzyjc/ok/zjs/': sidebar.zjs,
      '/gmzyjc/ok/zjz/': sidebar.zjz,
      '/gmzyjc/ok/zjx/': sidebar.zjx,
      '/gmzyjc/ok/hk/': sidebar.hk,
      '/gmzyjc/ok/ya/': sidebar.ya,
      '/gmzyjc/ok/yjxj/': sidebar.yjxj,
      '/gmzyjc/ok/zxyjh/': sidebar.zxyjh,
      '/gmzyjc/ok/fjx/': sidebar.fjx,
      // 其他书籍
      '/gmzyjc/ok/gmrw/': sidebar.gmrw,
      '/gmzyjc/ok/gbshl/': sidebar.gbshl,
      '/gmzyjc/ok/hdnjls/': sidebar.hdnjls,
      '/gmzyjc/ok/hdnjsw/': sidebar.hdnjsw,
      '/gmzyjc/ok/nj/': sidebar.nj,
      '/gmzyjc/ok/pwl/': sidebar.pwl,
      '/gmzyjc/ok/zyzl/': sidebar.zyzl,
      '/gmzyjc/ok/fxj/': sidebar.fxj,
      '/gmzyjc/ok/mj/': sidebar.mj,
      '/gmzyjc/ok/lk/': sidebar.lk,
      '/gmzyjc/ok/shltm/': sidebar.shltm,
      // 总书目
      '/': sidebar.gmzyjc,
    },
    footer: {
      message: '光明中医教材电子化',
      copyright: 'Copyright © 2025-present 地上马',
    },
  },
});
