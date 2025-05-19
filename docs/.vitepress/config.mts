import { defineConfig } from 'vitepress';
import {withSidebar} from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config

var config = {
  title: "MCServerHowTo",
  description: "手把手、渐进式的MC开服教程！",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

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
