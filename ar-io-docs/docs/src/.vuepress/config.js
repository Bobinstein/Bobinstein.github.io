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
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    logo: "/images/elephant-light.png",
    smoothScroll: true,
    initialOpenGroupIndex: -1,
    sidebar: {
      // sidebar for docs landing page
      "/docs/": [
        {
          initialOpenGroupIndex: -1,
          title: "Ardrive",
          children: [
            {
              title: "Ardrive-cli",
              path: "/docs/ardrive/ardrive-cli/",
            },
            {
              title: 'Ardrive Core SDK',
              path: '/docs/ardrive/ardrive-core/'
            }
          ],
        },
        {
          initialOpenGroupIndex: -1,
          title: 'Ar.io',
          children: [
            {
              title: 'ar.io placeholder',
              path: '/docs/ar-io/placeholder/'
            },
            {
              title: 'ar.io need to add stuff',
              path: '/docs/ar-io/need-to-add/'
            }
          ]
        }
      ],
      // homepage and fallback
      "/": [
        {
          title: "Docs",
          sidebarDepth: 0,
          initialOpenGroupIndex: -1,
          children: [
            {
              title: "Ardrive",
              children: [
                {
                  initialOpenGroupIndex: -1,
                  title: "Ardrive-CLI",
                  path: "/docs/ardrive/ardrive-cli/",
                },
                {
                  initialOpenGroupIndex: -1,
                  title: "Ardrive Core SDK",
                  path: "/docs/ardrive/ardrive-core/",
                },
              ],
            },
            {
              title: "Ar.io",
              children: [
                { title: "ar.io placeholder", collapsable: false, link: '/' },
                { title: "need to add stuff", collapsable: false, link: '/' },
              ],
            },
          ],
        },
        {
          title: "Tutorials",
          children: [
            {
              title: "filler",
              collapsable: false,
            },
            {
              title: "Placeholder",
              collapsable: false,
            },
          ],
        },
        {
          title: "Standards",
          children: [
            {
              title: "Nothing here",
              collapsable: false,
            },
            {
              title: "maybe later",
              collapsable: false,
            },
          ],
        },
      ],
    },
    nav: [
      {
        text: "docs",
        items: [
          {
            text: "Ardrive",
            items: [
              { text: "CLI", link: "/docs/ardrive/ardrive-cli/" },
              { text: "Core SDK", link: "/docs/ardrive/ardrive-core/" },
            ],
          },
          {
            text: "ar.io",
            items: [
              {
                text: "Placeholder",
                link: "/",
              },
              {
                text: "Need to add stuff",
                link: "/",
              },
            ],
          },
        ],
      },
      { text: "Tutorials", link: "/tutorials/" },
      { text: "Standards", link: "/standards/" },
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
