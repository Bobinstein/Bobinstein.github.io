---
sidebar: auto
---

# Contributing to ar.io docs

We welcome input from the community to help improve our documentation.
You can follow the instructions below to create a request for us to add your contribution to our page.

## Prerequisites

[Have Git installed on your computer](https://git-scm.com/downloads)

[Have a code editor like VS code installed](https://code.visualstudio.com/download)

[Have a Github account](https://github.com)

Have Yarn installed on your computer

- [Windows](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Mac](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Ubuntu](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

## Getting Started

### Forking the repo

In order to send a request for us to publish your contributions, you must first fork
the repository for the website on your local computer so that you can make changes.

Do this by signing into, or creating, your github account and going to our repository, found <a style="text-decoration: underline" href="https://github.com/Bobinstein/Bobinstein.github.io">here</a>

Then click on the "Fork" button at the top right.

<img src="/docs/images/contribute/fork-button-dark.png"/>

This will give you the option to create a copy, or "fork" of the repository on your account that you can publish to freely.

<center><img src='/docs/images/contribute/create-fork-dark.png'/></center>

### Cloning to your computer

Now that you have your own fork to work with, you can set everything up on your computer.
Navigate to the folder you want the code to be copied to and open a terminal.
Most code editing IDEs, like VS Code will let you open terminals directly in the application. You can also open a terminal by right clicking on a folder and selecting "Open in Terminal" (Windows or Linux), or "New Terminal at Folder" (Mac).

Once you have the terminal opened at your desired location, enter the following command

- replace '< user name >' with your github username

```
git clone https://github.com/< user name >/Bobinstein.github.io.git
```

This will copy the entire repository to your local computer.

### Setting up the code

To save on space and speed up the process of copying the code, the documentation section of the website has several supporting code libraries that are not included in the github repository. You will need to install these on your computer in order to run the code.

first, navigate into your newly created clone, and then into the documentation section.

```
cd Bobinstein.github.io/ar-io-docs/docs
```

and then install the libraries with

```
yarn install
```

once this is done, you can open the repository in your code editor and make your desired changes. If you are using VS Code, you can simply enter the command

```
code
```

in your terminal to open VS Code in your current folder

### Launching the development server

In order to view any changes you make before pushing them to github, you can open the development server so that you can view the page in your browser.

From in the documentation section of the repository (Bobinstein.github.io/ar-io-docs/docs) run the command in your terminal

```
yarn dev
```

This will compile the current code and make it viewable at <a href="http://localhost:8080">localhost:8080</a>

Most changes will be updated in real time, but you may need to close and reopen the development server in order to see some changes. The server can be closed by going to the terminal where it is running and pressing ctrl+c.

## Editing the code

### Adding new Documentation

If you would like to add an entirely new page to our documentation, first identify which category it falls into. We currently have the following options:

- Concepts
  -- This section is dedicated to explaining and breaking down the overarching concepts behind Arweave, ar.io, and its products, including a glossary of terms.
- Docs
  -- This section is dedicated to providing instructions on how to use specific products or code bases provided by ar.io
- Tutorials
  -- This section is dedicated to more in depth explanations on how to use a product or code base provided by ar.io. It can include community projects that integrate ar.io products in order to give real world examples of using the product.

Once you have determined where your new documentation should go, you can add it to the repository. Folders for each section are found at Bobinstien.github.io/ar-io-docs/docs.src/

Simply Place your .md file inside the appropriate folder. Making sure it doesn't share a name with an existing file

### Adding a link to the sidebar

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
        title: "Ar.io",
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
        title: "Ar.io",
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

## Submitting your Request

### Preparing and pushing to your repository

Vuepress takes your code and generates static HTML files for it in the root folder of the repository, so there is an extra step to take in order to keep the website functional before pushing to github. Close your development server with ctrl+c in your terminal and then run the command 
```
yarn build
```
This will start the process of generating the static files. It should only take a few seconds.
* Note: Watch your terminal for any errors. If your code cannot be successfully compiled into static HTML, the build will fail and you will have to correct the errors and run the build again.

Once this is done, navigate in your terminal back to the root folder. Assuming you haven't moved around, you can do this with the following command
```
cd ../..
```
Now you are ready to push your changes to your own github repository. There are more advanced options if you are familiar with git, but the following three commands are the simplest way to make sure all your changes are pushed to github
- replace '< comment >' with a short explanation of the changes you made.
```
git add .
git commit -m '< comment >'
git push
```

### Creating the Pull Request

Once you have pushed your changes to your own repository, go back to the github page for <a style="text-decoration: underline" href="https://github.com/Bobinstein/Bobinstein.github.io"> the original repository</a> and click on the 'Pull requests' option.

<img src="/docs/images/contribute/Pull-request-dark.png"/>

This page will show a summary of the changes you made from the original. Then click the green "New Pull Request" button. This will open the 'Comparing Changes' page which will summarize the changes you made from the original. Github will automatically detect if there have been any changes to the main repository since you forked your code that will prevent a successful merge. If there are no issues, click "Create Pull Request", add a title and description, and then click "Create Pull Request" again to submit a request for review.