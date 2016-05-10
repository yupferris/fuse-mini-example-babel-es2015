# fuse-mini-example-babel-es2015
A mini example to show how Fuse plays nicely with JS transpilers like [Babel](https://babeljs.io/). It's a trivial example that maps a FuseJS `Observable` using an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), nothing more :)

## Prerequisites
Beyond [Fuse](https://www.fusetools.com/downloads), ywou'll need [Node.js](https://nodejs.org/en/) (for [npm](https://www.npmjs.com/)). Head over to https://nodejs.org/en/download/ and follow the instructions there to install the latest LTS (at the time of writing, v4.4.4). This will install node and npm.

Once npm is installed, we'll use it to install our project's node dependencies (in this case, only Babel) from the project directory like so:

```sh
npm install
```

And we're all set!

## Building and Running
Before we `fuse preview`, we need to ensure Babel is watching our `js` directory and compiling our code. To do this, we'll fire up a second terminal in our project directory and run:

```sh
npm run build
```

At this point, we can `fuse preview` and everything should be playing nicely :)

## Setup from Scratch
_**Note**: It's quite possible that these steps will change with newer/different versions of the tools used here. This mini-guide is provided more as an example to show how these tools **can** fit together; it's recommended you check the individual tools' setup guides and figure out how to fit them together in a way that works best for your project._

#### Create Fuse project
We'll start by just creating a basic Fuse app, and add a couple folders to contain our original JS (es2015) and the compiled JS (es5). We'll call those folders `js` and `.js-compiled`, respectively:

```sh
# Create project
fuse create app my-project

# Enter project dir
cd my-project

# Create folders for our original JS files (es2015) and the compiled files (es5)
mkdir js
mkdir .js-compiled
```

#### Set up npm package
For this, we really just need a valid `package.json` file in our project. This will be used to store the module(s) we depend on and a small build script to simplify setting up Babel's file watching when we're ready to run. This isn't strictly necessary, but I think it's a good idea.

This can either be done using `npm-init` and taking the default values, or simply creating the file yourself. It should look something like this:

```js
{
  "name": "babel",
  "version": "1.0.0",
}
```

#### Install Babel
```sh
# install the Babel cli and the es2015 preset
npm install --save-dev babel-cli babel-preset-es2015

# make a .babelrc (config file) with the es2015 preset
echo '{ "presets": ["es2015"] }' > .babelrc
```

#### Setup run script
When running Babel, we'll want it to watch our `js` directory and compile our source files into our `.js-compiled` directory. If we were to run Babel from the terminal directly, we'll use this command:

```sh
babel js -d .js-compiled -w
```

To make things a bit more convenient, we'll set up a command in our npm scripts so we can instead just use `npm run build`, which is a bit easier to remember. To do this, we'll add the following to our `package.json` file:

```js
  "scripts": {
    "build": "babel js -d .js-compiled -w"
  },
```

The whole file should now look something like this:

```js
{
  "name": "babel",
  "version": "1.0.0",
  "scripts": {
    "build": "babel js -d .js-compiled -w"
  },
  "devDependencies": {
    "babel-cli": "^6.8.0",
    "babel-preset-es2015": "^6.6.0"
  }
}
```

#### Ready to roll!
At this point, everything should be set up and ready to go. All that's left is to write our UX and JS (with the JS code inside the `js` folder), and load the compiled JS into our UX. For example, if our original JS code was `js/MainView.js`, we'd pull in the compiled one like so:

```ux
<JavaScript File="./.js-compiled/MainView.js" />
```

And that's it, go nuts :)

## Versions
This example was produced with Fuse (beta) v0.12.3 (build 6348), babel 6.8.0, node v4.4.4, and npm 2.15.1. It was tested on Mac OS X 10.10.5.

## License
This code is licensed under the BSD2 license (see LICENSE).
