import { defineConfig } from 'vitepress';
import {withSidebar} from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config

var config = {
  markdown: {
    image: {
      lazyLoading: true
    },
    lineNumbers: true
  },
  sitemap: {
    hostname: 'https://mcserverhowto.molab.top'
  },
  title: "MCServerHowTo",

  description: "手把手、渐进式的MC开服教程！",
  themeConfig: {
    markdown: {
      lineNumbers: true
    },
    search: {
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }}},
      provider: 'local'
    },
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "本页内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],
    notFound: {
      title: "页面未找到",
      quote: "这一页不存在哦，回到主页再看看吧",
      linkText: "返回首页",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/moran0710/MCServerHowTo' }
    ],
    footer: {
      message :"<a href='https://molab.top'>墨云实验室</a> | <a href='https://openmo.molab.top'>OpenMoPlugins开源插件计划</a> | <a href='https://github.com/vuejs/vitepress'>VitePress 强力驱动</a>",
      copyright: '<a href="mcserverhowto.molab.top">MCServerHowTo</a> © 2025 by <a href="https://github.com/moran0710">Moran0710</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>'
    }
  }
}

export default defineConfig(withSidebar(config, {
  collapsed:true,
  documentRootPath:"docs"
}));
