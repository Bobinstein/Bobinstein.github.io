(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{293:function(e,t,a){"use strict";a.r(t);var i=a(15),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adding-new-documentation-single-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-documentation-single-page"}},[e._v("#")]),e._v(" Adding New Documentation - Single Page")]),e._v(" "),t("p",[e._v("If you would like to add an entirely new page to our documentation, first identify which category it falls into. We currently have the following options:")]),e._v(" "),t("ul",[t("li",[e._v("Concepts\n"),t("ul",[t("li",[e._v("This section is dedicated to explaining and breaking down the overarching concepts behind Arweave, ar.io, and its products, including a glossary of terms.")])])]),e._v(" "),t("li",[e._v("Docs\n"),t("ul",[t("li",[e._v("This section is dedicated to providing instructions on how to use specific products or code bases provided by ar.io")])])]),e._v(" "),t("li",[e._v("Tutorials\n"),t("ul",[t("li",[e._v("This section is dedicated to more in depth explanations on how to use a product or code base provided by ar.io. It can include community projects that integrate ar.io products in order to give real world examples of using the product.")])])])]),e._v(" "),t("p",[e._v("Once you have determined where your new documentation should go, you can add it to the repository. Folders for each section are found at Bobinstien.github.io/ar-io-docs/docs.src/")]),e._v(" "),t("p",[e._v("Simply Place your .md file inside the appropriate folder. Making sure it doesn't share a name with an existing file")]),e._v(" "),t("h1",{attrs:{id:"adding-a-link-to-the-sidebar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-link-to-the-sidebar"}},[e._v("#")]),e._v(" Adding a link to the sidebar")]),e._v(" "),t("p",[e._v("Once you have your new page added to the repository, you can add a link to the default sidebar so that users can navigate to it. This is optional. As part of the review process before your changes are published to the main repository our Technical Content Creator will check if you have added the link and, if no link was added and it is determined that your contribution should be accepted, a link will be added for you.")]),e._v(" "),t("p",[e._v("If you want to add your own, open the default sidebar configuration file found at Bobinstein.github.io/ar-io-docs/docs/src/.vuepress/sidebar_configs/default_config.js.")]),e._v(" "),t("p",[e._v('Find the section for the category where you added your page (Concepts, Docs, Tutorials).\nEach category exists as a JSON object in the config file with the first key being "title" and the value being the name of the category. See the example below')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    title: "Docs",\n    children: [\n      {\n        title: "Ardrive",\n        children: [\n          {\n            title: "Ardrive-CLI",\n            path: "/docs/ardrive/ardrive-cli",\n          },\n          {\n            title: "Ardrive Core SDK",\n            path: "/docs/ardrive/ardrive-core",\n          },\n          {\n            title: "Price Calculator",\n            path: "/docs/ardrive/price-calculator",\n          },\n        ],\n      },\n      {\n        title: "ar.io",\n        children: [\n          {\n            title: "Arweave Gateway",\n            path: "/docs/ar-io/arweave-gateway",\n          },\n        ],\n      },\n    ],\n  },\n')])])]),t("p",[e._v("In this example, 'Docs' is the category. There are several sub objects inside the array 'children' with their own title and path. Each sub item can also have additional children if needed.\nYou need to find where your new page should appear in the sidebar, and add a new object with a title and the path to your file. In the above example, if you wanted to add a new page with documentation for an ar.io product, you would add a new object after the object with the title 'Arweave Gateway' but still inside the ar.io children array.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('      {\n        title: "ar.io",\n        children: [\n          {\n            title: "Arweave Gateway",\n            path: "/docs/ar-io/arweave-gateway",\n          },\n          {\n            title: "<Your Page Title>",\n            path: "/docs/<path-to-your-file>"\n          },\n        ],\n      },\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);