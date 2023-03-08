// bikin variable

var a = 1 // hoisting
let b = 2 // variable biasa tanpa hoisting
const c = 3 // constant variable, value nya ga bisa berubah

// tipe tipe variable
let myInt = 1 // number/integer
let myString = 'string ku' // string
let myArray = [1,2,3,4,5] //array
let myBoolean = true //boolean

//crud array

//read
console.log(myArray) // access whole array
console.log(myArray[1]) // access index

//create 
let myArray2 = [1,2,3,4,5] //array

//edit
myArray2 = ['a','b', 'c']
myArray2.push('d') // add to last location
myArray.unshift('z') // add to first location

//delete
myArray2.pop() // remove last index
myArray.shift() // remove first


// arimatik
a + b // tambah
a - b // kurang
a * b // kali
a / b // bagi
a % b // mod / sisa pembagian

//pembanding ini tuh bakal ngasi true or false alias boolean

a === b // equals, check variable type
a == b // equals regardless of variable type
a !== b // not equals, check variable type
a !== b // not equals regardless of variable type
a > b // greater
a >= b // greater than
a < b // lower
b <= b // lower than