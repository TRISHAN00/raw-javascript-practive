/*
 *
 * Title: Javascript Scope
 * Description: Javascript Scope
 * Author: Trishan Saha
 * Date: 30-Aug-2021
 *
 */

// var
var x = 10

function myFunc () {
  // console.log(x)
}
myFunc()

// let
function letFunc () {
  let letName = 10
  letName = 'Rishan'
}
letFunc()

// const
function constFunc () {
  // const constName = 'Trishan'
  const constObject = {
    name: 'Jhone',
    age: 35,
    gender: 'name'
  }
  constObject.name = 'Trishan'
  // console.log(constObject) // output = 'Trishan'
}

constFunc()
