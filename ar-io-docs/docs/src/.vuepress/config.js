const { description } = require("../../package");
// sidebar config imports
const ardrive_cli_sidebar_config = require('./sidebar_configs/ardrive_cli_config')
const default_sidebar_config = require('./sidebar_configs/default_config')

// nav bar config imports
const default_navbar_config = require('./navbar_configs/default_config')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Ar.io",
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
    initialOpenGroupIndex: -1,
    // navbar: {
    //   custom: true,
    //   component: '@theme/global-components/Navbar.vue'
    // },
    sidebar: {
      // ardrive cli broken up
      "/docs/ardrive/broken-up/": ardrive_cli_sidebar_config,
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
