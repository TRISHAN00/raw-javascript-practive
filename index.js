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

// hotelCost
const firstToTen = ten => {
  return ten * 100
}

const tenToTwenty = twenty => {
  return twenty * 80
}

const unlimitedDays = unlimited => {
  return unlimited * 50
}

let days = 2

if (firstToTen && tenToTwenty && unlimitedDays) {
  return days * firstToTen + tenToTwenty + unlimitedDays
}

console.log(days)
