- [Welcome to my software portfolio!](#welcome-to-my-software-portfolio)
  - [Using This as a Basis for Your Own Portfolio](#using-this-as-a-basis-for-your-own-portfolio)
  - [Tools Used](#tools-used)
  - [What This Repo Showcases](#what-this-repo-showcases)
- [Setup](#setup)
  - [Installing Tooling](#installing-tooling)
    - [For Windows Users](#for-windows-users)
    - [For Everyone](#for-everyone)
  - [Installing Project Dependencies](#installing-project-dependencies)
- [Running the app](#running-the-app)
- [Running Tests](#running-tests)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Notes on Technical Decisions](#notes-on-technical-decisions)
  - [Why GitHub Pages?](#why-github-pages)

# Welcome to my software portfolio!
This is a little React app intended to showcase my mad tech skillz and keep my coding skills sharp during an extended bout of unemployment. It's nothing mind-blowing or revolutionary, but I think it shows my technical capability, attention to detail, and eye for design.

## Using This as a Basis for Your Own Portfolio
If you'd like to fork the repo to build your own portfolio site, read on! I'll walk you through:
- Getting it running locally,
- Deploying it to GitHub Pages using GitHub Actions,
- Running tests,
- Hooking up a custom domain, and
- A bit about the design and architecture philosophy.

If you found this project through GitHub and would like to see the site running, check out [mikeyoung.tech](https://mikeyoung.tech).

## Tools Used
This project uses React, TypeScript, Jest, Playwright (overkill, I know), and GitHub Actions. It's hosted for free with GitHub Pages, and I used [NameCheap](https://www.namecheap.com/) to buy and configure the custom domain [mikeyoung.tech](https://mikeyoung.tech). I also used MaterialUI for its ample component library and powerful theming tools, reducing the amount of overhead involved in getting the UI looking snazzy.

## What This Repo Showcases
**Technical Skill**: That I can write TypeScript, HTML, CSS, and Markdown, and that I know my way around React and the Node ecosystem. See the "Just an Absolute Word Salad of Skills and Tools" section of [my resume](https://www.mikeyoung.tech/#/resume) for other tools I'm familiar with.

**Focus on Quality**: That I ensure my code is adequately tested and documented. One of my primary focuses when writing code is that it's approachable to future devs and doesn't cause headaches. I'm not obsessed with code coverage percentages, but I do believe that all happy paths and reasonably foreseen side paths should be tested when code ships. As bugs arise, tests for the edge cases addressed should shiup with the fix.

**Design Sense**: I wouldn't call myself a designer by any means, but I like to think I have a knack for it. Sensible color schemes, consistent design features, and intuitive UX are not only important to a cohesive product, they're things I thoroughly enjoy creating.

**Personality**: I'm kind of a goober. I like to laugh, and I seriously hate being serious. I hope my occasional odd word choices and unbecoming photos can convince you I'm `nOt LiKe ThE oThEr BoYs`.

# Setup
Enough of the job-seeking drivel. Let's talk turkey and get this app runnin'!

## Installing Tooling
### For Windows Users
If you're using Windows like me, there's some additional tooling that'll make your coding environment more Unix-like. While not strictly necessary, this setup will make following this README—and working with most other open-source projects—much easier. Credit where it's due, this info comes from [this SO answer by user Himanshu](https://stackoverflow.com/a/50527994/7137556).
1. Install Git from https://git-scm.com/download/win
2. Open Visual Studio Code, and open the terminal with `Ctrl` + `` ` ``.
   ![Screenshot of new terminal environment with "Powershell" selected by default](https://i.sstatic.net/V4hx4.png)
3. Open the command palette using `Ctrl` + `Shift` + `P`.
4. Type "Select Default Profile"
5. Select "Git Bash" from the options
6. Click on the **+** icon in the terminal window
7. New terminals will now use Git Bash!
   ![Screenshot of new terminal environment with "Bash" selected by default](https://i.sstatic.net/5zLAP.png)

### For Everyone
We need to get our Node environment set up. For this, we'll need:
- [Node.js](https://nodejs.org) - You could install this globally, but I recommend using a Node version manager like [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script).
- A Node package manager - I recommend [Yarn](https://yarnpkg.com/getting-started) for its performance and active support, but [NPM](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) has caught up performance-wise in recent years.
- If you haven't already set up your machine to work with GitHub, you'll also need to [set up an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

Put simply:
```console
user@pc:~$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash # Install Node
user@pc:~$ corepack enable # Corepack ships with Node. This line adds Yarn to your PATH.
```
And that's it! Now we can actually get the app set up.

## Installing Project Dependencies
Let's grab the code, install libraries, and get it running!

0. **Optional**: If you're using this as a basis for your own portfolio, you'll want to [fork the repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) and rename it `[your-github-username].github.io`. If you're just running it locally, you can skip this step.
1. Clone the repo. We'll name the new folder something more legible, like `portfolio`, for the sake of documentation.
```console
user@pc:~$ git clone git@github.com:[username]/[username].github.io.git portfolio
Cloning into 'portfolio'...
user@pc:~$ cd portfolio
```
2. Install the right version of Node.
```console
user@pc:~/portfolio$ nvm use
```
3. Install Node packages.
```console
user@pc:~/portfolio$ yarn install
```

Now you're ready to run the app!

# Running the app
To start the development server, simply run `yarn start` in the project directory.
```console
user@pc:~/portfolio$ yarn start
```

Open your browser to `localhost:3000` to see the site running!

# Running Tests
TODO

# Deploying to GitHub Pages
To deploy to GitHub Pages, you'll first need to have [forked this repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) and renamed it `[your-github-username].github.io`. Second, you'll need to set up a GitHub Action. This project already has one set up, so all you need to do is push your changes to the `main` branch! The action will run the tests, build the app, and deploy it to GitHub Pages. But to get that Action do do anything, you'll need to configure GitHub Pages in your repo settings.

TODO: Add steps for GitHub Pages setup.

# Notes on Technical Decisions
## Why GitHub Pages?
I'm a full-stack dev through and through, but I especially love front-end. So, while choosing GitHub Pages as my host limited me to a front-end-only site, it didn't limit my ability to express myself! The compromise also enabled this to be a free venture (minus the custom domain) and limited the scope to something achievable in just a few days.
