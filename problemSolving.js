// print a random number using two values
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

// how to showcase name alphabetically
const names = ['Arif', 'Nahid', 'Emon', 'Boni', 'Paran', 'Aslam']

const alphabeticallyName = arr => {
  return arr.sort()
}
// how to sort number in order
const numbers = [2, 1, 3, 4, 6, 5, 10, 9, 8, 7]

const numberInOrder = num => {
  return num.sort((a, b) => {
    return a - b
  })
}

// check how many vowel there are in a sentense.
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const sentenseFunc = sentence => {
  let count = 0
  const letters = Array.from(sentence)
  letters.forEach(value => {
    if (vowel.includes(value)) {
      count++
    }
  })

  return count
}

// console.log(sentenseFunc('I love my mother'))


// 
