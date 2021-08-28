// problem solving on Array ------- 01
const getFirstElement = num => {
  return num[0]
}

// Write a function that takes the base and height of a triangle and return its area. ---- 2

const triArea = (base, height) => {
  return base * height
}

const cubes = a => {
  return a ** 3
}

// Write a function that converts hours into seconds.

const howManySeconds = hours => {
  return 60 * 60 * hours
}

// Is the Number Less than or Equal to Zero?
const lessThanOrEqualToZero = num => {
  return num === 0 || num < 0 ? true : false
}

// age calculate
const calcAge = age => {
  const yearInDay = 365
  return age * 365
}

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

const makePair = (num1, num2) => {
  return [num1, num2]
}

// Write a function that takes an integer minutes and converts it to seconds.
const convert = miniute => {
  const minToSec = 60
  return miniute * minToSec
}

function squared (b) {
  return b * b
}

// Write a function that returns the string "something" joined with a space " " and the given argument a.
const giveMeSomething = text => {
  return 'something ' + text
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

const lessThan100 = (num1, num2) => {
  return num1 + num2 > 100 ? false : true
}

// kilometreToMeter
const kilometerToMeter = kilometre => {
  return kilometre * 1000 + ' metre'
}

// budgetCalculator
const budgetCalculator = (watch, phone, laptop) => {
  return watch * 50 + phone * 100 + laptop * 500
}

// megaFriend length
const megaFriendLength = str => {
  const strSplit = str.split(' ')
  let longestWord = 0
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length
    }
  }
  return longestWord
}

const megaFriendSor = str => {
  let longestWord = str.split(' ').sort((a, b) => {
    return b.length - a.length
  })
  return longestWord[0]
}

const arr = ['A', 'B', 'C']
arr.reverse()

// Problem 3:   hotelCost

function hotelCost (day) {
  if (day < 0) {
    return 'Please input a valid day !!'
  } else {
    var cost = 0
    if (day <= 10) {
      cost = day * 100

      return cost
    } else if (day <= 20) {
      var firstTenDay = 10 * 100
      var remainingDay = day - 10
      var secondTenDay = remainingDay * 80
      cost = firstTenDay + secondTenDay

      return cost
    } else {
      var firstTenDay = 10 * 100
      var secondTenDay = 10 * 80
      var remainingDay = day - 20
      var totalDay = remainingDay * 50
      cost = firstTenDay + secondTenDay + totalDay

      return cost
    }
  }
}


