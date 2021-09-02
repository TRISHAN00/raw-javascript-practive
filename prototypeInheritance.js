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

// Example - 3
Object.prototype.trishan = function () {
  console.log('I am trishan')
}
const p = {}
p.trishan()

// example - 4
function Person (name, age) {
  this.name = name
  this.age = age
}

function Cricketer (country, type, name, age) {
  Person.call(this)
  this.country = country
  this.type = type
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`)
  },
  sleep: function () {
    console.log(`${this.name} is playing`)
  }
}

Cricketer.prototype = Person

const sakib = new Cricketer('bangladesh', 'all rounder', 'sakib', 35)

// const sakib = new Person('sakib', 35)
// const tamim = new Person('tamim', 38)
// console.log(sakib.eat())
// console.log(tamim.eat())
