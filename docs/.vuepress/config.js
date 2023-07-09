const head = require('./config/head.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "vdoing-template",
  description: 'vdoing博客主题模板',
  base: '/vdoing-template/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "00b9e8518fa1da95d11b",
        clientSecret: "6a445adb823c2c0fee860b57ad93c1769791138b",
        owner: "zr1zr",
        repo: "rr-notes",
      },
    ],
  ],

  head,
  themeConfig,
}
