
# Submitting your Request

## Preparing and pushing to your repository

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
- replace '\<comment>' with a short explanation of the changes you made.
```
git add .
git commit -m '<comment>'
git push
```

The method for pushing your changes to the repository using the branch method is substantially similar, you just need to indicate that you are pushing to a specific branch in the command by adding 'origin \<name of branch>'
```
git add .
git commit -m '<comment>'
git push origin <name of branch>
```

## Creating the Pull Request

Once you have pushed your changes to your own repository, go back to the github page for <a style="text-decoration: underline" href="https://github.com/Bobinstein/Bobinstein.github.io"> the original repository</a> and click on the 'Pull requests' option.

<img src="/docs/images/contribute/Pull-request-dark.png"/>

This page will show a summary of the changes you made from the original. Then click the green "New Pull Request" button. This will open the 'Comparing Changes' page which will summarize the changes you made from the original. Github will automatically detect if there have been any changes to the main repository since you forked your code that will prevent a successful merge. If there are no issues, click "Create Pull Request", add a title and description, and then click "Create Pull Request" again to submit a request for review.