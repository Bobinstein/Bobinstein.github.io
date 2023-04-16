# Adding New Documentation - Single Page

If you would like to add an entirely new page to our documentation, first identify which category it falls into. We currently have the following options:

- Concepts
  - This section is dedicated to explaining and breaking down the overarching concepts behind Arweave, ar.io, and its products, including a glossary of terms.
- Docs
  - This section is dedicated to providing instructions on how to use specific products or code bases provided by ar.io
- Tutorials
  - This section is dedicated to more in depth explanations on how to use a product or code base provided by ar.io. It can include community projects that integrate ar.io products in order to give real world examples of using the product.

Once you have determined where your new documentation should go, you can add it to the repository. Folders for each section are found at Bobinstien.github.io/ar-io-docs/docs.src/

Simply Place your .md file inside the appropriate folder. Making sure it doesn't share a name with an existing file

# Adding a link to the sidebar

Once you have your new page added to the repository, you can add a link to the default sidebar so that users can navigate to it. This is optional. As part of the review process before your changes are published to the main repository our Technical Content Creator will check if you have added the link and, if no link was added and it is determined that your contribution should be accepted, a link will be added for you.

If you want to add your own, open the default sidebar configuration file found at Bobinstein.github.io/ar-io-docs/docs/src/.vuepress/sidebar_configs/default_config.js.

Find the section for the category where you added your page (Concepts, Docs, Tutorials).
Each category exists as a JSON object in the config file with the first key being "title" and the value being the name of the category. See the example below

```
{
    title: "Docs",
    children: [
      {
        title: "Ardrive",
        children: [
          {
            title: "Ardrive-CLI",
            path: "/docs/ardrive/ardrive-cli",
          },
          {
            title: "Ardrive Core SDK",
            path: "/docs/ardrive/ardrive-core",
          },
          {
            title: "Price Calculator",
            path: "/docs/ardrive/price-calculator",
          },
        ],
      },
      {
        title: "ar.io",
        children: [
          {
            title: "Arweave Gateway",
            path: "/docs/ar-io/arweave-gateway",
          },
        ],
      },
    ],
  },
```

In this example, 'Docs' is the category. There are several sub objects inside the array 'children' with their own title and path. Each sub item can also have additional children if needed.
You need to find where your new page should appear in the sidebar, and add a new object with a title and the path to your file. In the above example, if you wanted to add a new page with documentation for an ar.io product, you would add a new object after the object with the title 'Arweave Gateway' but still inside the ar.io children array.

```
      {
        title: "ar.io",
        children: [
          {
            title: "Arweave Gateway",
            path: "/docs/ar-io/arweave-gateway",
          },
          {
            title: "<Your Page Title>",
            path: "/docs/<path-to-your-file>"
          },
        ],
      },
```
