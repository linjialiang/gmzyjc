// import flexSearchIndexOptions from "flexsearch";
import { defineConfig } from 'vitepress';
import * as nav from './nav/main.mts';
import * as sidebar from './sidebar/main.mts';

export default defineConfig({
  base: '/',
  ignoreDeadLinks: false, // 当设置为 true 时，VitePress 不会因为死链而导致构建失败。
  // 部分 markdown 文件不作为源内容输出的，需要排除
  srcExclude: ['**/README.md'],
  lang: 'zh-CN',
  title: '光明中医教材',
  description: '光明中医教材电子版，邀请大家共同来完善！',
  head: [['link', { rel: 'icon', href: '/static/favicon.ico' }]],
  lastUpdated: false,
  markdown: {
    lineNumbers: false,
    math: false,
  },
  sitemap: {
    hostname: 'http://gmzyjc.e8so.com',
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
        link: 'https://github.com/1030504258/gmzyjc.git',
      },
      {
        icon: {
          svg: '<svg t="1685882013964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7153" width="600" height="600"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#d81e06" p-id="7154"></path></svg>',
        },
        link: 'https://gitee.com/gmzy_admin/gmzyjc.git',
      },
    ],
    editLink: {
      pattern: 'https://gitee.com/gmzy_admin/gmzyjc.git',
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
      // 第一学年
      '/gmzyjc/ok/gmzy/': sidebar.gmzy,
      '/gmzyjc/ok/rm/': sidebar.rm,
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
      '/gmzyjc/ok/': sidebar.gmzyjc,
    },
    footer: {
      message: '光明中医教材电子化',
      copyright: 'Copyright © 2025-present 地上马',
    },
  },
});
