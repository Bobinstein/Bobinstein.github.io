# Writing your .md File

## Markdown Codes

Markdown has a number of special commands to format your page. Some of the more common options are as follows. A full list can be be found <a href="https://www.markdownguide.org/extended-syntax/" style="text-decoration:underline">here</a>

Headers - It is very important to separate your documentation contributions into relevant sections. Markdown header tags is the best way to do this. the '#' symbol is used to denote a header, and each level of subheader can be denoted by adding another #.
```
# Primary section

## The first subsection
<content goes here>

## The next subsection
<content goes here>

### This section has an additional subsection
<content goes here

# A new Primary section
<more content>
``` 

Lists - Both ordered and unordered lists can be easily generated in markdown. 

- Ordered - To make an ordered list, simply preface your first item with '1. '. On the next line, use '2. ' and so on.
- Unordered - Unordered lists are created in a similar way, but rather than a number you can use a '* ' or '- ' to denote list items with a bullet point
- Nesting lists - Both ordered and unordered lists can include sub lists. Under a list item, add four white spaces or one tab and then start a new list using the above methods. White space is important in markdown so make sure you are consistent with your spacing on lists.


Links - Markdown has its own syntax for creating hyperlinks. Add your text inside of square brackets, and then without any whitespace put your link address inside parenthesis

\[link Text](https://website.com)

You can also link to local pages in this way

\[link Text](/docs/)

External links (those that point to different websites) will include a symbol to let users know clicking on it will take them to a different site, local links will not. 

> **[NOTE]** If you use an HTML a tag to generate an external link, will will not have the indicator symbol

## HTML

In addition to markdown specific codes, .md files support most HTML tags. No extra steps or formatting are required in order to use HTML tags, and attributes like 'class' can be included to support styling from the website's css file. An excellent basic tutorial on using HTML can be found [here]('https://www.freecodecamp.org/news/html-full-course-for-beginners/')