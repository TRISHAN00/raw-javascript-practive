/*
 *
 * Title: Higher Order Function
 * Description: What is higher order function how it works
 * Author: Trishan Saha
 * Date: 09-Set-2021
 *
 */
// higher order function

// test function is a object with an example
// example - 1
// function hello () {
//   //   console.log('Hello World')
// }

// hello()
// hello.firstName = 'trishan'
// console.log(hello.firstName)

// example - 2
// const myfunc = function () {
//   console.log('My function')
// }
// console.dir(myfunc)

// // it i create a flat object let see what is look like
// const person = {
//   name: 'sakib',
//   age: '34'
// }
// console.log(person)

// Example - 3
// const student = () => {
//   return function () {
//     return function () {
//       //   console.log('Hello Students')
//     }
//   }
// }
// student()()()

// Example - 4 without higher order function
// make a array
// const numbers = [1, 2, 3, 4]
// const result = []

// for (let i = 0; i < numbers.length; i++) {
//   result.push(numbers[i] * 2)
// }
// console.log(result)

// // Example - 5 usgin higher order function
// // make a array
// const numbers = [1, 2, 3, 4]
// const result = numbers.map(number => {
//   return number * 2
// })

// console.log(result)

// Example - 6
const players = [
  {
    name: 'Sakib',
    avr: 38.58
  },
  {
    name: 'Tamim',
    avr: 37.44
  },
  {
    name: 'Mosh',
    avr: 35.55
  },
  {
    name: 'Sommo',
    avr: 35.14
  }
]

// const result = []

// for (let i = 0; i < players.length; i++) {
//   players[i].avr > 37 ? result.push(players[i]) : false
// }

// console.log(result)
