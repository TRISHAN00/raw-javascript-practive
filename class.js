class Person {
  constructor (name, age) {
    this.name = name
    this.age = age

    this.eat = function () {
      console.log(`${this.name} is eating`)
    }
  }
}

class Cricket extends Person {
  constructor (name, age, country, type) {
    super(name, age)
    this.name = name
    this.age = age
    this.country = country
    this.type = type
    this.play = function () {
      console.log(`${this.name} is playing`)
    }
  }
}

const sakib = new Cricket('sakib', 35, 'bangladesh', 'all rounder')
sakib.play()

// console.log(sakib)
