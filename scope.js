/*
 *
 * Title: Javascript Scope
 * Description: Javascript Scope
 * Author: Trishan Saha
 * Date: 30-Aug-2021
 *
 */

var x = 10

const myFunc = () => {
  x = 21
  if (x > 10) {
    // console.log(`${x} is bigger than 10`)
  } else {
    // console.log(`${x} is not bigger than 10`)
  }
}
myFunc()
