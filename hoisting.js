// console.log(a) // hoisting.js:1 Uncaught ReferenceError: a is not defined

// but when declare a variable and assign value into a
// var a = 'Bangladesh'
// console.log(a)

// when declare a below console it will return undefine
// console.log(a)
// var a = 'Bangladesh'

// hoisting the other thing
// var a
// // console.log(a)

// a = 'Bangladesh'
// // console.log(a)

let LANGUAGE = 'Java'
let language = 'Javascript'

function getLanguage () {
  if (!language) {
    let language = LANGUAGE
  }
  return language
}

// console.log(getLanguage()) // output is javascript
