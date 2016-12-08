# Rate My Campus

[![Build Status](https://travis-ci.org/sharynneazhar/eecs448-rate-my-campus.svg?branch=master)](https://travis-ci.org/sharynneazhar/eecs448-rate-my-campus)

EECS 448 - Project 03

Rate My Campus is the best destination for college campus reviews and ratings
based on student feedback.

<a href="[http://i.imgur.com/tlfimbK.png]">
  <img src="http://i.imgur.com/tlfimbK.png" height="300" />
</a>
<a href="http://i.imgur.com/30UCTYa.png">
  <img src="http://i.imgur.com/30UCTYa.png" height="300" />
</a>

### Getting Started
#### Pre-requisites
- Install [Meteor][9]
- Download the repository
  `git clone https://github.com/sharynneazhar/eecs448-rate-my-campus.git`

#### Running the app
- Install dependencies `meteor npm install`
- Run the app `meteor`
- Navigate to `http://localhost:3000` to see the app working.

##### Installing NPM packages
Run `meteor npm install --save <package name>`
> What is the difference between `--save` and `--save-dev`?  
- `--save-dev` is used to save the package for development purpose. Example:
unit tests, minification.
- `--save` is used to save the package required for the application to run.

##### Installing Atmosphere packages
Atmosphere packages are packages written specifically for Meteor.
- Install an Atmosphere package, run `meteor add <package name>`
- See all the packages you have installed, run `meteor list`
- Remove unwanted package, run `meteor remove <package name>`

### Resources
#### React & Meteor
- [React Documentation][4] - React is a JavaScript library for creating user
interfaces. Many people choose to think of React as the V in MVC.
- [Meteor Documentation][1] - Meteor is a full-stack JavaScript platform for
developing modern web and mobile applications.
- [React with Meteor Guide][2] - How to use React, Facebook's frontend
rendering library, with Meteor.
- [The Meteor Chef][13] - The Meteor Chef teaches you how to build software with Meteor, adding a dash of dev wisdom for taste.

#### ECMAScript 6 (ES6)
- [Luke Hoban's "ES6 Features"][10]
- [Kyle Simpson's "You don't know JS: ES6 and beyond"][11]
- [Nikolas C. Zakas "Understanding ECMAScript 6"][12]

#### Tutorial
- [React with Meteor Tutorial][3] - Create a simple app to manage a 'to do'
list and collaborate with others on those tasks.
- [Beginner's Guide to MongoDB and Meteor][14] - How MongoDB works with Meteor


### The Team
This project is currently maintained by [Sharynne Azhar][5], [Erin Coots][6],
[Ashli Mosiman][7], and [Parthvi Patel][8].


[1]: http://docs.meteor.com/#/full/
[2]: https://guide.meteor.com/react.html
[3]: https://www.meteor.com/tutorials/react/creating-an-app
[4]: https://facebook.github.io/react/docs/getting-started.html
[5]: https://github.com/sharynneazhar
[6]: https://github.com/erincoots
[7]: https://github.com/ashlimosiman
[8]: https://github.com/parthvip28
[9]: https://www.meteor.com/install
[10]: https://github.com/lukehoban/es6features#readme
[11]: https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond
[12]: https://github.com/nzakas/understandinges6
[13]: https://themeteorchef.com/
[14]: http://meteortips.com/first-meteor-tutorial/databases-part-1/
[15]: https://guide.meteor.com/testing.html
