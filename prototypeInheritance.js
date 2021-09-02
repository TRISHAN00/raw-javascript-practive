// tody we are describe prototype inheritance
function Person (name, age) {
  this.name = name
  this.age = age
}

function Cricket (type, hand, name, age) {
  Object.create
  this.type = type
  this.hand = hand
}

const sakib = new Cricket('all rounder', 'left', 'sakib', 36)
console.log(sakib)
