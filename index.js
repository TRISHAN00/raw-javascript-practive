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

console.log(makePair(1, 2))
