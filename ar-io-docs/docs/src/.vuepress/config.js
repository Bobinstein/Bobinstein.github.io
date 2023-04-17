const { description } = require("../../package");
// sidebar config imports
const ardrive_cli_sidebar_config = require('./sidebar_configs/ardrive_cli_config')
const default_sidebar_config = require('./sidebar_configs/default_config')
const contribute_sidebar_config = require('./sidebar_configs/contribute_config')

// nav bar config imports
const default_navbar_config = require('./navbar_configs/default_config')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "ar.io",
  base: "/docs/",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "white" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    colorMode: 'dark',
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    logo: "/images/elephant-light.png",
    smoothScroll: true,

    sidebar: {
      // ardrive cli sidebar
      "/docs/ardrive/ardrive-cli/": ardrive_cli_sidebar_config,
      // Contribute Sidebar
      "/contribute/": contribute_sidebar_config,

      
      // default sidebar MUST BE LAST ITEM!!!!!!
      "/": default_sidebar_config,
    },
    nav: default_navbar_config,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@goy/svg-icons",
  ],
  dest: "../../docs",
};
