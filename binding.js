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
const Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(`the print name is ${this.name}`)
    },
    father: {
      name: 'Mr, XXX',
      printName: function () {
        console.log(this.name)
      }
    }
  }
}

const sakib = Person('Sakib', 35)
sakib.printName()
sakib.father.printName()
