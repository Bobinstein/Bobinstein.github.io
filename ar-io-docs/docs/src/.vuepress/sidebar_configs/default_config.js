module.exports = [
  {
    title: "Concepts",
    initialOpenGroupIndex: -1,
    collapsable: true,
    children: [
      {
        title: "Overview",
        path: "/concepts/overview",
      },
      {
        title: "Glossary",
        path: "/concepts/glossary",
      },
      {
        title: "White Paper",
        path: "https://youtu.be/dQw4w9WgXcQ",
      },
    ],
  },
  {
    title: "Docs",
    children: [
      {
        initialOpenGroupIndex: -1,
        collapsable: true,
        title: "Ardrive",
        children: [
          {
            title: "Ardrive-CLI",
            path: "/docs/ardrive/ardrive-cli/intro",
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
  {
    title: "Tutorials",
    children: [
      {
        title: "filler",
        collapsable: false,
        path: "/tutorials/filler",
      },
      {
        title: "Placeholder",
        collapsable: false,
        path: "/tutorials/placeholder",
      },
    ],
  },

  {
    title: "Contribute",
    path: "/contribute/prerequisites",
  },
];
