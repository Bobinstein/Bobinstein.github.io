# Getting Started - Fork Method

## Forking the repo

In order to send a request for us to publish your contributions, you must first fork
the repository for the website on your local computer so that you can make changes.

Do this by signing into, or creating, your github account and going to our repository, found <a style="text-decoration: underline" href="https://github.com/Bobinstein/Bobinstein.github.io">here</a>

Then click on the "Fork" button at the top right.

<img src="/docs/images/contribute/fork-button-dark.png"/>

This will give you the option to create a copy, or "fork" of the repository on your account that you can publish to freely.

<center><img src='/docs/images/contribute/create-fork-dark.png'/></center>

## Cloning to your computer

Now that you have your own fork to work with, you can set everything up on your computer.
Navigate to the folder you want the code to be copied to and open a terminal.
Most code editing IDEs, like VS Code will let you open terminals directly in the application. You can also open a terminal by right clicking on a folder and selecting "Open in Terminal" (Windows or Linux), or "New Terminal at Folder" (Mac).

Once you have the terminal opened at your desired location, enter the following command

- replace '< user name >' with your github username

```
git clone https://github.com/< user name >/Bobinstein.github.io.git
```

This will copy the entire repository to your local computer.

## Setting up the code

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

## Launching the development server

In order to view any changes you make before pushing them to github, you can open the development server so that you can view the page in your browser.

From in the documentation section of the repository (Bobinstein.github.io/ar-io-docs/docs) run the command in your terminal

```
yarn dev
```

This will compile the current code and make it viewable at <a href="http://localhost:8080">localhost:8080</a>

Most changes will be updated in real time, but you may need to close and reopen the development server in order to see some changes. The server can be closed by going to the terminal where it is running and pressing ctrl+c.
