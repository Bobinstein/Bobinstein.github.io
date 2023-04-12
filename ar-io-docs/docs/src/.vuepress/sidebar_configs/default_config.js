module.exports = [
    {
      title: 'Alternate display for docs',
      path: '/docs/ardrive/broken-up/intro'
    },
    {
      title: 'Concepts',
      initialOpenGroupIndex: -1,
      children: [
        {
          title: 'Overview',
          path: '/concepts/overview'
        },
        {
          title: 'Glossary',
          path: '/concepts/glossary'
        },
        {
          title: 'White Paper',
          path: 'https://youtu.be/dQw4w9WgXcQ'
        }
      ]
    },
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
              path: "/docs/ardrive/ardrive-cli",
            },
            {
              initialOpenGroupIndex: -1,
              title: "Ardrive Core SDK",
              path: "/docs/ardrive/ardrive-core",
            },
          ],
        },
        {
          title: "Ar.io",
          children: [
            {
              title: "Arweave Gateway",
              path: "/docs/ar-io/arweave-gateway",
            },
            // {
            //   title: "ar.io need to add stuff",
            //   path: "/docs/ar-io/need-to-add",
            // },
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
    // {
    //   title: "Standards",
    //   children: [
    //     {
    //       title: "Nothing here",
    //       collapsable: false,
    //       path: "/standards/nothing-here",
    //     },
    //     {
    //       title: "maybe later",
    //       collapsable: false,
    //       path: "/standards/maybe-later",
    //     },
    //   ],
    // },
  ]