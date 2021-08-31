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

// Example - 2 ================
function bankAccount (initialeBalance) {
  var balance = initialeBalance
  return function () {
    return balance
  }
}

const account = bankAccount(100000)
// console.dir(account)

// example - 3 ================
var exampleThreeVar1 = 55

var threeFunc = function () {
  var exampleThreeVar2 = 66
  var exampleThreeVar3 = 77
  return function () {
    return exampleThreeVar3
  }
}

// Example

const fetchFunc = url => {
  const dataUrl = url
  return fetch(dataUrl).then(res => res.json())
  // .then(data => console.log(data))
}
fetchFunc('https://jsonplaceholder.typicode.com/todos/')
