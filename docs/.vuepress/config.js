import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
  // 增加一个自定义的 favicon 
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],

  base: 'article',
  // 指定 vuepress build 命令的输出目录
  dest: 'article',
})