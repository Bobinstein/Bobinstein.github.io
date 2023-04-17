# Adding Documentation - Multiple Pages 

Adding more complicated documentation that requires multiple pages is very similar to adding a single page, it just requires a few extra steps to configure the website to place all the pages in the correct order.

## Organizing your files

Just like with a [single page](/contribute/adding-single-page), you will need to determine where your new section belongs. However, instead of adding a single file in the appropriate folder, you can create a new subfolder of your own. All of your documentation files will be placed inside this folder.

### README

Every folder should have a README.md file. This acts as the default page displayed if a user is directed to the folder without a specific file specified. It is not necessary to have any link to this file anywhere on the website, but if a user manually navigates to the folder in their url, having a README file will prevent a 404 and can easily provide links to other files in the folder.

### Prev/Next

Links to the previous and next pages in your documentation can be configured so that a user can easily navigate through steps. These links can be automatically generated if you set up a sidebar configuration, but you can also manually configure them in each individual file. To do this, add the 'prev' and 'next' keys to the [frontmatter](/contribute/editing/frontmatter) for each file, with the appropriate links as the values.

## Configuring the Sidebar

The most complicated portion of integrating a new section of documentation is configuring the sidebar to appropriately display the layout of your files. Simpler methods are currently being researched, but as of right now there are several steps required. You may omit these steps, and a team member will create the sidebar configuration for you as part of review of any pull request that is approved for integration into the website.

### Creating your Sidebar Config File

The first step is to create a .js file containing the layout of your sidebar. Place this file in Bobinstein.github.io/ar-io-docs/docs/src/.vuepress/sidebar_configs/

In the file, set the export as an array
```
module.exports = []
```
module.exports means that when another file tries to look at this file to import a value, it will return that array (the square brackets)

Inside the array, you can set your actual sidebar configuration, which will be a series of JSON objects. Each object with have the key 'title' and its value will be the text displayed in the sidebar. Then set the key 'path' to the file path for each file. The order in which you enter each object for your files determines the previous and next pages for links at the bottom of a page.
```
module.exports = [
    {
      title: 'Intro',
      path: '/docs/ardrive/ardrive-cli/intro'
    },
    {
      title: 'Getting Started',
      path: '/docs/ardrive/ardrive-cli/getting-started',
    },
    {
      title: 'Using the CLI',
      path: '/docs/ardrive/ardrive-cli/using-the-cli'
    },
    {
      title: 'All Commands',
      path: '/docs/ardrive/ardrive-cli/all-commands'
    },
    {
      title: 'Getting Help',
      path: '/docs/ardrive/ardrive-cli/getting-help'
    }
  ]
  ```

  Each object should represent one page of the documentation that you added. Headers (# tags) from each file will be pulled by the sidebar automatically and shown underneath the title in the sidebar.

  #### Sidebar Objects with Children

  If the layout of your documentation is more complicated, or contains sub folders for a specific topic that you want to differentiate, you can include a 'children' tag inside any of your JSON objects for your sidebar configuration. The value for the tag will be an array (content inside square brackets) and will consist of another layer of JSON objects. All of these children will appear as a collapsible menu below the parent. You do not need a 'path' value if you have a object with children.

  ```
  module.exports = [
    {
        title: 'Prerequisites',
        path: '/contribute/prerequisites'
    },
    {
        title: 'Getting Started -- Fork Method',
        path: '/contribute/getting-started-fork'
    },
    {
        title: 'Editing your page',
        children: [
            {
                title: 'What is A .md File?',
                path: '/contribute/editing/what-is-md'
            },
            {
                title: 'Frontmatter',
                path: '/contribute/editing/frontmatter'
            },
            {
                title: 'MD Syntax',
                path: '/contribute/editing/md-syntax'
            }
        ]
    },
    {
        title: 'Adding Single Page',
        path: '/contribute/adding-single-page'
    },
    {
        title: 'Submitting your Pull Request',
        path: '/contribute/submitting-pull-request'
    }
]
```

### Adding Your Sidebar to config.js

In order for the website to use the sidebar you just created, you will need to add it to the configuration file for vuepress. This can be found at Bobinstein.github.io/ar-io-docs/docs/src/.vuepress/config.js

#### Importing Your Configuration

At the very top of this file, you will see several lines of code that start with "const \<xxx> = require". This is how code from other files are imported to be used. At the end of this block of imports, add a new line to import your sidebar configuration. 
```
const <name_of_your_contribution_config> = require('./sidebar_configs/<name_of_your_file')
```

#### Adding Your Configuration

Once your file is imported, go about halfway down the config.js file and find the key 'themeConfig'. Inside of this object, there is another key with the name 'sidebar' which is also a JSON object. This object is a series of key value pairs where the key is a file path. When a user navigates to a page where the url includes that path, that sidebar configuration will be used.

Add two new lines at the beginning of the sidebar object. The first will begin with '//'. This tells the code that the line is only a comment and doesn't effect the code. On this line, give a title to your sidebar configuration.
On the next line, create a key value pair with the path to your documentation, and the configuration that you imported in the last step. Be sure to end the line with a comma.

The code will check each key in order and stop when it finds one that matches, so be sure to add your pair to the top of the object

```
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
      // ardrive cli sidebar
      "/docs/ardrive/ardrive-cli/": ardrive_cli_sidebar_config,
      // Contribute Sidebar
      "/contribute/": contribute_sidebar_config,

      
      // default sidebar MUST BE LAST ITEM!!!!!!
      "/": default_sidebar_config,
    },
    nav: default_navbar_config,
  },
  ```

### Adding Your page to the Default Sidebar

If you would like your page to appear in the default sidebar, you will need to make a small edit to the default sidebar configuration file, found at Bobinstein.github.io/ar-io-docs/docs/src/.vuepress/sidebar_configs/default_config.js

Add a new JSON object in the same manner you used to create your custom sidebar configuration. Make sure it is located in the appropriate place. You only need one object pointing at the first page of your documentation, once a user clicks on that they will be able to see your custom sidebar and can then navigate to a specific section they are looking for.