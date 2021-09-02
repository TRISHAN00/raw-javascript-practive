// tody we are describe prototype inheritance

// const personMethod = {
//   eat: function () {
//     console.log(`${this.name} is eating`)
//   },
//   sleep: function () {
//     console.log(`${this.name} is playing`)
//   }
// }

// function Person (name, age) {
//   const person = Object.create(personMethod)

//   person.name = name
//   person.age = age

//   return person
// }

// const sakib = Person('sakib', 35)
// const tamim = Person('tamim', 38)
// console.log(sakib.sleep())
// console.log(tamim.sleep())

// Example - 2

// function Person (name, age) {
//   //   const person = Object.create(personMethod)

//   this.name = name
//   this.age = age

//   //   return person
// }

// Person.prototype = {
//   eat: function () {
//     console.log(`${this.name} is eating`)
//   },
//   sleep: function () {
//     console.log(`${this.name} is playing`)
//   }
// }

// const sakib = new Person('sakib', 35)
// const tamim = new Person('tamim', 38)
// console.log(sakib.eat())
// console.log(tamim.eat())

// example - 3
function Person (name, age) {
  //   const person = Object.create(personMethod)

  this.name = name
  this.age = age

  //   return person
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`)
  },
  sleep: function () {
    console.log(`${this.name} is playing`)
  }
}

const sakib = new Person('sakib', 35)
const tamim = new Person('tamim', 38)
console.log(sakib.eat())
console.log(tamim.eat())
