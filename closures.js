var sum = function () {
  return num1 + num2
}

var num1 = 2

var doubleFunc = function () {
  var num2 = 3
  return function () {
    return num1 + num2
  }
}

const doubleVar = doubleFunc()
// console.dir(doubleVar)

// Example - 2
function bankAccount (initialeBalance) {
  var balance = initialeBalance
  return function () {
    return balance
  }
}

const account = bankAccount(100000)

// console.log(account())
