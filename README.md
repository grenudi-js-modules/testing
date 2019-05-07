# @grenudi/testing

[![npm (scoped)](https://img.shields.io/badge/dynamic/json.svg?color=green&label=version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fgrenudi-js-modules%2Ftesting%2Fmaster%2Fpackage.json)](https://www.npmjs.com/package/@grenudi/testing)
[![npm (scoped)](https://img.shields.io/badge/dynamic/json.svg?color=yellow&label=size&query=%24.size&suffix=kB&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fgrenudi-js-modules%2Ftesting)](https://www.npmjs.com/package/@grenudi/testing)

just fooling around

## Install

```
$ npm install @grenudi/testing
```

## Usage

```js
const testing = require("@grenudi/testing");

testing("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
