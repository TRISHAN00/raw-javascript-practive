// first example of prototype in javascript
// const person = {}

// person.name = 'Sakib'
// person.age = 35
// person.eat = function () {
//   return `${person.name} is eatting`
// }

// person.sleep = function () {
//   return `${person.name} is sleeping`
// }

// console.log(person.eat())
// console.log(person.sleep())

// Example - 2

function Person (name, age, gender) {
  const person = {}

  person.name = name
  person.age = age
  person.gender = gender

  person.eat = function () {
    return `${name} is eatting`
  }

  person.gender = function () {
    return `${gender} is gender`
  }

  person.sleep = function () {
    return `${name} is sleeping`
  }

  return person
}

// Example - 3
function Student (name, className, roll) {
  return `student name is ${name} and read in class ${className} roll is ${roll}`
}

const trishan = Student('Trishan Saha', 12, 2)
console.log(trishan)
