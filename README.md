- [Welcome to my software portfolio!](#welcome-to-my-software-portfolio)
  - [Tools Used](#tools-used)
  - [What This Repo Showcases](#what-this-repo-showcases)
  - [Using This as a Basis for Your Own Portfolio](#using-this-as-a-basis-for-your-own-portfolio)
- [Setup](#setup)
  - [Installing Tooling](#installing-tooling)
    - [For Windows Users](#for-windows-users)
    - [For Everyone](#for-everyone)
  - [Installing Project Dependencies](#installing-project-dependencies)
- [Running the app](#running-the-app)
- [Running Tests](#running-tests)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
  - [1. Fork the Repo](#1-fork-the-repo)
  - [2. Configure GitHub Pages](#2-configure-github-pages)
  - [3. Configure GitHub Actions](#3-configure-github-actions)
  - [4. Push Some Code!](#4-push-some-code)
  - [5. (Optional) Configure a Custom Domain](#5-optional-configure-a-custom-domain)
- [Notes on Technical Decisions](#notes-on-technical-decisions)
  - [Why GitHub Pages?](#why-github-pages)
  - [Why use a component library like Material UI?](#why-use-a-component-library-like-material-ui)
  - [Why are you using a `HashRouter` instead of a `BrowserRouter`?](#why-are-you-using-a-hashrouter-instead-of-a-browserrouter)

# Welcome to my software portfolio!
This is a little React app intended to showcase my mad tech skillz and keep my coding chops sharp during an extended bout of unemployment. Woohoo! It's nothing mind-blowing or revolutionary, but I think it showcases some of my technical capability, attention to detail, and eye for design.

## Tools Used
This project uses React, TypeScript, Jest, and GitHub Actions. It's hosted for free with GitHub Pages, and I used [NameCheap](https://www.namecheap.com/) to buy and configure the custom domain [myoung.dev](https://myoung.dev). I also used [MUI](https://mui.com/) (formerly known as MaterialUI) for its ample component library and powerful theming tools, reducing the amount of overhead involved in getting the UI looking snazzy.

## What This Repo Showcases
**Technical Skill** — That I can write TypeScript, HTML, CSS, and Markdown, and that I know my way around React, GitHub Actions, and the Node ecosystem. See the "Just an Absolute Word Salad of Skills and Tools" section of [my resume](https://www.myoung.dev/#/resume) for other tools I'm familiar with.

**Focus on Quality** — That I ensure my code is adequately tested and documented. One of my primary focuses when writing code is that it's approachable to future devs and doesn't cause headaches. I'm not obsessed with code coverage percentages, but I do believe that all happy paths and reasonably foreseeable side paths should be tested when code ships. As bugs arise, tests for the edge cases addressed should ship with the fix.

**Design Sense** — That I understand visual language. I wouldn't call myself a designer by any means, but I like to think I have a knack for it. Cohesive color schemes, consistent design features, and intuitive layouts aren't only important to an enjoyable user experience—they're things I thoroughly enjoy creating!

**Personality** — That I'm kind of a goober. I like to laugh, and I seriously hate being serious. I hope my odd word choices and unbecoming photos can convince you I'm *`nOt LiKe ThE oThEr DeVs`*.

## Using This as a Basis for Your Own Portfolio
If you'd like to fork the repo to build your own portfolio site, read on! I'll walk you through:
- Getting it running locally,
- Deploying it to GitHub Pages using GitHub Actions,
- Running tests,
- Hooking up a custom domain, and
- A bit about the design and architecture philosophy.

If you found this project through GitHub and would like to see the site running, check out [myoung.dev](https://myoung.dev).

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
Before tackling the next steps of this guide, go ahead and pop open a new tab with the [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages). They're super-helpful and will give you a more in-depth understanding of the things we'll do along the way.

## 1. Fork the Repo
To deploy to GitHub Pages, you'll first need to have [forked this repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) and renamed it `[your-github-username].github.io`. For GitHub Pages to host your site at `https://[your-github-username].github.io`, the repo must follow this naming convention.

## 2. Configure GitHub Pages
Second, you'll need to set up your repo to deploy using GitHub Actions.
1. From GitHub, go to the "Settings" tab of your repo.
2. In the lefthand navigation tree, under the "Code & Automation" section, click "Pages".
3. Under "Build and deployment" > "Source", select "GitHub Actions".

You'll notice at the bottom of the page, there's an option for a custom domain. We'll touch on that later.

## 3. Configure GitHub Actions
Third, you'll need an action to build and run your app. This project already has that action set up ([`node-build-and-deploy.yml`](https://github.com/mjy90/mjy90.github.io/tree/readme/.github/workflows/node-build-and-deploy.yml)), so all you need to do is push your changes to the `main` branch! The action will run the tests, build the app, and deploy it to GitHub Pages.

For more information on configuring your GitHub Pages site, see the [GitHub Pages documentation](https://docs.github.com/en/pages/quickstart).

## 4. Push Some Code!
At this point, you should be in a spot where you can just make some changes to the code, push to `main`, and see your changes reflected on your GitHub Pages site by going to `https://[your-github-username].github.io`!

## 5. (Optional) Configure a Custom Domain
At this point, you've got a perfectly valid portfolio site. But if you want it to be wicked legit, kehd, nothin' beats a custom domain. I used [NameCheap](https://www.namecheap.com/) to buy and configure the domain [myoung.dev](https://myoung.dev), which is what I'll be showing you how to configure below. Whatever domain registrar you decide to use, the process should be similar.

If you hit any snags, or are curious about more advanced use cases like subdomains, check out the [GitHub Pages docs on configuring custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

Let's get that dope new domain set up:
1. [Buy a domain](https://www.namecheap.com/). Finding a domain that was short, included my *incredibly* common name, *and* was available was half the fun of this entire project, honestly.
2. From your NameCheap dashboard, head to the ["Domain List" tab](https://ap.www.namecheap.com/domains/list/) and click "Manage" on the domain you want to configure.
3. Under the "Advanced DNS" tab, add the following `A` records for the GitHub IPV4 hosts, `AAAA` records for IPV6 hosts, and a `CNAME` record for the `www` subdomain:
    | Type | Host | Value | TTL |
    |:-:|:-:|:--|:--|
    | A | @ | 185.199.108.153 | Automatic |
    | A | @ | 185.199.109.153 | Automatic |
    | A | @ | 185.199.110.153 | Automatic |
    | A | @ | 185.199.111.153 | Automatic |
    | AAAA | @ | 2606:50c0:8000::153 | Automatic |
    | AAAA | @ | 2606:50c0:8001::153 | Automatic |
    | AAAA | @ | 2606:50c0:8002::153 | Automatic |
    | AAAA | @ | 2606:50c0:8003::153 | Automatic |
    | CNAME | www | [your-github-username].github.io | Automatic |
4. Make sure to click "Save all changes" when you're done!
5. Head to the "GitHub Pages" section of your repo settings and add your custom domain to the "Custom domain" field with the format `www.[custom.domain]`. That `www` is important for HTTPS! I also recommend checking the "Enforce HTTPS" box to ensure all traffic to your site is secure. It'll take a few minutes and, if you're impatient like me, a couple retries of the DNS check for this option to be available.

Once the automated DNS check finishes (which might take a few minutes), your site should be live at your custom domain! `[your-github-username].github.io` will now redirect to the new domain too, so that old URL you handed out is still good 😉

Once that check passes, you should see something like this:
![GitHub Pages settings page](/src/assets/GitHub%20Pages%20Config.png)

# Notes on Technical Decisions
## Why GitHub Pages?
I'm a full-stack dev through and through, but I especially love front-end. So, while choosing GitHub Pages as my host limited me to a front-end-only site, it didn't limit my ability to express myself! The compromise also enabled this to be a free venture (minus the custom domain) and limited the scope to something achievable in just a few days.

I also wanted to show off my ability to work with GitHub Actions, which I hadn't used before. I'd only ever used CircleCI and Heroku before. The CI/CD pipeline I set up for this project was a great learning experience and will be a valuable tool in future projects.

## Why use a component library like Material UI?
I've never really understood the appeal of creating a React component library from scratch, frankly. There's a *lot* of boilerplate involved in that endeavor, and I just don't think it's worth your time if it's in the service of getting something else done.

UI libraries like Material, Radix, Semantic, Chakra, *etc.* grant you:
1. All the building blocks you could ever need for a simple-to-moderately-complex website,
2. Fantastic visual documentation,
3. An active support community, and
4. In the case of Material UI (and perhaps others), a nestable `ThemeProvider`, an icon library, and community template store.

These things aren't limiting either. You can always create that hyper-specific data visualizer the Sales Team asked for, that map view customers are begging for, or some other nonstandard component without the styles and standards of the component library dictating implementation.

## Why are you using a `HashRouter` instead of a `BrowserRouter`?
GitHub Pages doesn't support single-page apps that use the HTML5 History API. This is because GitHub Pages serves your site from a subdirectory of the `github.io` domain, and the server doesn't know how to handle client-side routing. To get around this, we use a `HashRouter` instead of a `BrowserRouter`. This adds a hash to the URL, which tells the server to serve the `index.html` file and let the client-side routing take over from there.
