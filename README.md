# React redux starter kit

## The starter kit is using the following components
* react
* redux
* redux-thunk - a very clean and expressive way to write complex event handling
* immutable.js - handling state in redux *can* be done using plain js, but we should take care not to mutate the state. Immutable.js helps.
* webpack for transpiling, packing etc. With babel and some polyfills and more.
* webpack-dev-server for hot reloading
* es6!!! Javascript with es6++ feels like a new language compared to previous version for a js n00b like me.
    Modules, arrow functions, destructors and lots of real useful syntactic sugar.
* chrome plugins for react og redux. Gives you full time travel on your state, out of the box.

## One commit for each aspect
The developent is done in multiple steps, one commit each, where each step handle a single aspect of the application.
You may see the result on the `master` branch, or you may see what was needed to get step5 up and running with
`git diff step5 step5^`, or whatever.

I appreciate any feedback. There are probably better ways of doing things, and I may have not understood all concept perfectly.
My previous experience with javascript have mainly been jquery page scripting, so there are many concepts
new to me here. Bear with me!


## Before you start
Be sure you have webpack and webpack-dev-server installed:
```
npm install webpack -g
npm install webpack-dev-server -g
```

Also, install all dependencies, and just start the development server
```
npm install
webpack-dev-server
```
Now, you may visit 127.0.0.1:8080


### Set up your editor to understand es6+
I use IntelliJ IDEA. To enable es6 and more there, set:

    Preferences > Language & Frameworks > JavaScript > JavaScript language version > JSX Harmony

Other editors may have similar settings.


## Some steps require special actions
Some changes on state structure may need to remove localstorage on 127.0.0.1 in your browser (ex. step 8).

If a step contains changes in package.json, you may need to run `npm install` and restart `webpack-dev-server`.

If a step contains changes in webpack.config.js, you will need to restart `webpack-dev-server`.
(Occationally, changes in webpack.config.js require you to run `webpack`)


## Step 1: A very simple react app
* A very simple hello react component
* Transpiling and packaging es6 and jsx via webpack
* hot reload via webpack-dev-server (try it!!)

Run `npm install`, `webpack-dev-server`, and go to 127.0.0.1:8080. Make som changes and see the hot reload in action!


## Next step: Add packaging for css and less
