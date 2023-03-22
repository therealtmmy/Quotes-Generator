# Quotes-Generator

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![first-timers-only](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](https://www.firsttimersonly.com/)

Contributing to an open source project for the first time can be a scary thing. The goal of this repo is to help you take your first steps as an open source contributor by developing a simple (but hopefully fun) quotes-generator. 💖

#### Try the live version of the game: https://quotes-generator-pink.vercel.app/

## Who can contribute?

Everyone can! (and I mean everyone) 💫

💻 **You don’t have to contribute code**. Add a new quote with author, fix a typo, report a bug, add some documentation, do some re-design or add a translation. This project just like most open source projects are in need of all sorts of different contributions. Not just code.

🌟 **You are good enough** Start off easy by fixing something small (like adding a new quotes). This will help you orient yourself in the project and increase your confidence and experience. No one will judge you if you make a mistake, and you can't break anything! Ask for some pointers if you get stuck. You got this!

The only thing that is required to get started is git. Make sure you have it installed on your computer by running `git --version` in your terminal. If you do not have git installed, [install it](https://help.github.com/articles/set-up-git/).

## Why contribute to open source?

When you contribute to Open Source, you are taking part in the collaborative effort of a vast community of passionate developers and contributors! Open Source software allows you to see, use, and more importantly modify its source code. Contributing to Open Source is a great way to develop a deeper understanding of software, and the best part is being able to learn and teach alongside a community of contributors.

## How to contribute

Follow this step-by-step guide to make your first open source contribution. The steps you will perform in this guide is a somewhat standard workflow that you will encounter in most projects: `Fork -> Clone -> Create a branch -> Make your changes -> Add Changes -> Commit -> Push Changes`

### 1. Fork

The first step is to create a fork of this repo. Do so by clicking on the fork button on the top of this page. A fork is basically your own working copy of this repository.

<img src=".github/fork.png" alt="Forking the repo" />

### 2. Clone

The next step is to clone the forked repo to your machine.

Go to your GitHub repositories and open the forked repository called Rebus (_forked from ollelauribostrom/rebus_). Click on the "Clone or download" button and then click the copy to clipboard icon to get your url.

<img align="right" width="300" src=".github/clone.png" alt="Cloning the repo" />

Finally run the following git command in your terminal:

```sh
git clone "the copied url"
```

### 3. Create a branch

Create a branch on your machine

```sh
git switch -c <your new branch>
...

...sh
> Note: Replace `<your-new-branch>` with something that describes the changes you are about to make

```

### 4. Make your changes

Now it's time to make your changes. Let's add a new quotes.

1. Open the file `src/script.js` in your favourite editor (preferable VSCode 😉).
1. Add a new quote to the end of the `quotes` array.
1. Save the file when you are done.

### 5. Add Changes

Initailize new changes by writing these command on your terminal

```sh
git add <the section of the file you made changes to>
```

### 6. Commit changes to the main branch

Commit your change to the main branch by running

```sh
git commit -m "Your message"
```

### 7. Push your changes to Github

Push your changes to GitHub by running:

```sh
git push origin <your-new-branch-name>
```

> Note: Replace `<your-new-branch-name>` with the name of your branch

### 8. Open a Pull Request

Head over to your repository on GitHub and click on the green "Compare and pull request" button.

<img src=".github/pr.png" alt="Compare and pull request" />

Describe your changes and submit your pull request

<img src=".github/pr2.png" alt="Submit pull request" />

## What's next?

🎉 Congratulations 🎉

You just took your first step as an open source contributor. Your pull request will be reviewed as soon as possible.

Please read the full text so that you can understand what actions will and will not be tolerated.

## License

Licensed under the MIT License.
