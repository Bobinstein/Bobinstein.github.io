const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Ar.io docs",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
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
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    logo: "/images/ArDrive-Logo-Dark.png",
    nav: [
      {
        text: "Ardrive-cli",
        items: [
          { text: "Docs", link: "/ardrive-cli/" },
          { text: "GitHub", link: "https://github.com/ardriveapp/ardrive-cli" },
        ],
      },
      {
        text: "Ardrive-core",
        items: [
          { text: "Docs", link: "/ardrive-core/" },
          {
            text: "GitHub",
            link: "https://github.com/ardriveapp/ardrive-core-js",
          },
        ],
      },
    ],
   
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", "@goy/svg-icons"],
  dest: "../../docs",
};
