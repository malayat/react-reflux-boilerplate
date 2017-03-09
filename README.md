# React Boilerplate with ES6/ES7
This contains the simple environment for to build React Applications with Reflux, React Router and ECMAScript 6/7 syntax.

## This project gives you the following:
* [React](https://facebook.github.io/react/)
* [Reflux](https://github.com/reflux/refluxjs)
* [React Router](https://github.com/reactjs/react-router)
* [Stylus loader](http://stylus-lang.com/)
* [Webpack](https://webpack.github.io/) build that:  
  * compiles JSX
  * transform ES6/ES7 to ES5
  * uglify JS and CSS files
  * runs a dev webserver
  * opens your browser at the dev URL  
  * reloads the browser upon save

## Requirements
1. [NodeJS](http://www.nodejs.org)
2. Clone or download this repo

## Getting Started
1. Installs packages `npm install`
2. Run `npm start`
4. Navigate to [http://localhost:9000/](http://localhost:9000/) if your browser doesn't open automatically
5. `npm run build` Generate *build* forder ready for production

##References
* [Learn Redux](https://github.com/wesbos/Learn-Redux-Starter-Files)

##Reflux
See the console log

<img src='https://cloud.githubusercontent.com/assets/5171608/17750558/b74da8aa-6488-11e6-967c-d63d21912127.png'>


The boilerplate is ready for use dispatch functions:
 * addComment
 * removeComment
 * increment

 <img src='https://cloud.githubusercontent.com/assets/5171608/17751104/2ca6d598-648b-11e6-9ae9-9a30f73df793.png'>

 And you can access to `this.props` with the dummy data:
 * comments
 * posts

<img src='https://cloud.githubusercontent.com/assets/5171608/17751103/2ca570e0-648b-11e6-857a-d5f340d06f1f.png'>

For the testing dispatch events, you can use this command in the console

`$r.store.dispatch({type: 'INCREMENT_LIKES', index: 0})`

<img src='https://cloud.githubusercontent.com/assets/5171608/17751101/2c9ef710-648b-11e6-92e4-6e844e276df5.png'>

<img src='https://cloud.githubusercontent.com/assets/5171608/17751102/2ca05128-648b-11e6-908b-934757ad0809.png'>

##Update
Please, instead of this project, you can see this other project more updated:

[Simple Counter App](https://github.com/malayat/counterflux)