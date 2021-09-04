// Sync javascript
// const processOrder = function (customer) {
//   console.log('process order for customer order')

//   const currentTime = new Date().getTime()

//   while (currentTime + 3000 >= new Date().getTime()) {
//     console.log('order processed for customer 1')
//   }
// }
// console.log('take order from customer 1')
// processOrder()
// console.log('completed order for customer 1')

// Asynchronous
const processOrder = customer => {
  console.log('process order for customer')

  setTimeout(() => {
    console.log('cooking food for customer 1')
  }, 3000)

  console.log('ready food for serve to customer 1')
}

console.log('take order for customer 1')
processOrder()
console.log('complete order for customer 1')
