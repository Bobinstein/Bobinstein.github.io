const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Ar.io Docs",
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
    logo: "/images/elephant-light.png",
    nav: [
      {
        text: "LEARN",
        items: [
          { type: "label", text: "About ar.io" },
          { text: "What is ar.io?", link: "" },
          { text: "Why ar.io?", link: "" },
          { type: "label", text: "About Arweave" },
          { text: "What is Arweave?", link: "" },
          { text: "What is the permaweb?", link: "" },
          { text: "What is a gateway?", link: "" },
          { text: "The problem of long-term data storage" },
        ],
      },
      {
        text: "USE",
        items: [
          { text: "ArDrive", link: "" },
          { text: "ArNS (Beta)", link: "" },
          { text: "ar.io Gateways", link: "" },
          { text: "Wallet", link: "" },
          { text: "Pricing Calculator", link: "" },
          { text: "Viewblock", link: "" },
        ],
      },
      {
        text: "DEVELOP",
        items: [
          { text: "CLI", link: "/ardrive-cli/" },
          { text: "ArDrive Core-JS", link: "/ardrive-core/" },
        ],
      },
      {
        text: "ENGAGE",
        items: [
          { text: "Newsletter", link: "" },
          { text: "Blog", link: "" },
          { text: "Socials", link: "" },
          { text: "CCC", link: "" },
          { text: "The Arcast", link: "" },
          { text: "Merch Store", link: "" },
        ],
      },
      {
        text: "ABOUT",
        items: [
          { text: "The Story", link: "" },
          { text: "The Foundation", link: "" },
          { text: "Press", link: "" },
          { text: "Contact", link: "" },
        ],
      },
    ],
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
