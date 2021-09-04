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
// const processOrder = customer => {
//   console.log('process order for customer')

//   setTimeout(() => {
//     console.log('cooking food for customer 1')
//   }, 3000)

//   console.log('ready food for serve to customer 1')
// }

// console.log('take order for customer 1')
// processOrder()
// console.log('complete order for customer 1')

// example - 3

const takeOrder = (customer, callback) => {
  console.log(`take order for ${customer}`)
  callback(customer)
}

const processOrder = (customer, callback) => {
  console.log(`process order for ${customer}`)

  setTimeout(() => {
    console.log(`order process for ${customer}`)
    console.log('cooking completed')
    callback(customer)
  }, 3000)
}

const orderCompleted = customer => {
  console.log(`order completed for ${customer}`)
}

takeOrder('customer 2', customer => {
  processOrder(customer, customer => {
    orderCompleted(customer)
  })
})
