// Example - 1
// const printPlayerNameFunction = function (obj) {
//   obj.printPlayerName = function () {
//     // console.log(this.name)
//   }
// }

// const sakib = {
//   name: 'Sakib',
//   age: 35
// }

// const tamim = {
//   name: 'Tamim',
//   age: 37
// }

// printPlayerNameFunction(sakib)
// printPlayerNameFunction(tamim)
// sakib.printPlayerName()
// tamim.printPlayerName()

// Example - 2
// const Person = function (name, age) {
//   return {
//     name: name,
//     age: age,
//     printName: function () {
//       console.log(`the print name is ${this.name}`)
//     },
//     father: {
//       name: 'Mr, XXX',
//       printName: function () {
//         console.log(this.name)
//       }
//     }
//   }
// }

// const sakib = Person('Sakib', 35)
// sakib.printName()
// sakib.father.printName()

// Example - 3
const printName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2} and ${v3} `)
  //   console.log(`${this.name} is ${v} `)
}

const sakib = {
  name: 'Sakib',
  age: 35,
  nationality: 'Bangladesh'
}

const tamim = {
  name: 'Tamim',
  age: 37,
  nationality: 'Bangladesh'
}

const v1 = 'Handsome'
const v2 = 'All-rounder'
const v3 = 'Smart'

const v = [v1, v2, v3]

printName.apply(sakib, v)

// printName.call(tamim, v1, v2, v3)
// printName.call(sakib, v1, v2, v3)
