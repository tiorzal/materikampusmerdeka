// Refresh Array

// function yang ada pada array
// push
// pop
// unshift
// shift


//TODO
// split
let myString = "1,2,3,4,5,6" // ['1','2', .. '6']
let convertedString = myString.split(",")

// console.log(convertedString)

let text = "How are you doing today?"
let convertedText = text.split(" ")

let myEmail = "tiohacktive@abc.xyz"
const currentDomain = myEmail.split('@')[1]
// console.log(currentDomain)
// console.log(convertedText)
// join
let a = convertedString.join("+")
// console.log(a)


// sort
let names = ['tio', 'heri', 'elsa', 'dewa', 'agung']
let sortedNames = names.sort().reverse()
// reverse
let reversedNames = names.reverse()
// console.log(sortedNames)
// console.log(reversedNames)

// forEach
names.forEach(myFunction)
function myFunction(e, index, theArray) {
  // console.log(theArray)
  // console.log(index)
  // console.log(e)
  // console.log(theArray[index])

  const currentNumber = index + 1
  const currentItem = currentNumber+"."+e

  // console.log(currentItem)
}

names.forEach((e, index, theArray) => {
  const currentNumber = index + 1
  const currentItem = currentNumber+"."+e

  // console.log(currentItem)
})

// map
const mappedArray = names.map(mapFunction)

function mapFunction (e, index) {
  // console.log(e)

  const currentNumber = index + 1
  const currentItem = currentNumber+"."+e

  return currentItem
}
// console.log(mappedArray)

const numbers = [4, 9, 16, 25]

const mappedNumbers = numbers.map(numberMapFunction)

function numberMapFunction (e) {
  return Math.sqrt(e)
}

// console.log(mappedNumbers)

// filter
const filteredNames = names.filter(filteredNamesFunction)

function filteredNamesFunction (e) {
  // console.log(e)
  if (e === 'agung') {
    return e
  } else if (e === 'elsa') {
    return e
  }
}

const filteredNumbers = numbers.filter(filteredNumbersFunction)

function filteredNumbersFunction (e) {
  if(e % 2 === 0) {
    return e
  }
}

// console.log(numbers)
// console.log(filteredNumbers)
// filter cuman bakal return apa yang ada di array nya

// console.log(filteredNames)
// reduce

const reducedNumbers = numbers.reduce(reducedNumbersFunction, 0)

function reducedNumbersFunction(total, num) {
  // console.log("-----------------")
  // console.log(total, 'total')
  // console.log(num, 'current item')

  return total + num
}

// arrow function () => {}
const reducedNumbersV2 = numbers.reduce((total,num) => {
  // console.log("-----------------")
  // console.log(total, 'total')
  // console.log(num, 'current item')
  
  return total + num
}, 0)

// console.log(reducedNumbers, 'reduced v1 number')
// console.log(reducedNumbersV2, 'reduced v2 number')

numbers.forEach((e) => {
  // console.log(e)
})


// filter, forEach, map, reduce


// const quizArray = ['1', 2, null, false, 'pada hari minggu']

/**
 * 1. '1 pada hari minggu'
 * 2. [null, false]
 * 3. ['pada hari minggu', 2, '1']
 * 
 * nilai assignment 2 nya, gw kasi default nilai 30
 * 
 * clue 'typeof' 
 */

//pada hari minggu
// const quizArray = ['1', 2, null, false, 'pada hari minggu'];

// const stringArray = quizArray.filter(item => {
//   return typeof item === 'string'
// }).join(' ');

// console.log(stringArray); 

//[null, false]
// const quizArray = ['1', 2, null, false, 'pada hari minggu'];

// const filteredArray = quizArray.filter(item => typeof item === 'boolean' || item === null);

// console.log(filteredArray); 

//['pada hari minggu', '2', '1']
// const quizArray = ['1', 2, null, false, 'pada hari minggu'];

// const filteredArray = quizArray.filter(item => {
//   return item
// }).reverse();

// console.log(filteredArray);


