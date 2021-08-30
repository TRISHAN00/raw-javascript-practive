// if (true) {
//   var varVariable = 'This is var'
// }
// console.log(varVariable)

// if (true) {
//   let letVariable = 'This is let'
//   console.log(letVariable) //it will be error
// }

//var is a function scope but function it self is a block scope
// let is a block scope

/*

   When we declare a variable (var) if the opportunity will be accessible anywhere from the outside. Because, after declaring the console out of scope, it points to the window object.

   but, let when we use let variable into into any scope it will not accessible from the outout side of scope.

*/

var varVariable = 10

function varFunc () {
  // console.log(varVariable) // return 10
}
varFunc()

function anotherVarFunc () {
  varVariable = 20
  // console.log(varVariable) // return 20
}
anotherVarFunc()

function varInfunc () {
  var varVariable = 30
  // console.log(varVariable) // return 30 beacause there is a another variable declare in varInFunc function scope. it know varInFunc().varVariable not window.varVariable
}
varInfunc()

// let

let letVariable = 10
letVariable = 20
// console.log(letVariable) // output 20

function letFunc () {
  // console.log(letVariable) // 20
  letVariable = 30
  // console.log(letVariable) // 30
  // let letVariable = 40
  // console.log(letVariable) // make error
}
letFunc()

// const
const constVariable = 10
// constVariable = 20
// console.log(constVariable) // error beacause const variable can not assign value more time

function anotherConstFunc () {
  // console.log(constVariable) // 10
}
anotherConstFunc()

function constFunc () {
  const constFuncVariable = 30
  // console.log(constFuncVariable) // 30

  // constFuncVariable = 40
  // console.log(constFuncVariable) // error

  const constObject = {
    name: 'Jhone',
    age: 35,
    gender: 'male'
  }
  // console.log(constObject.name) //Jhone
  constObject.name = 'Trishan'
  // console.log(constObject) //{ name: 'Trishan', age: 35, gender: 'male' }
}
constFunc()
