// console.log("halo juga")

// variable


// console.log(typeof variable1) << ini cara cek tipe variable

// var variable1 = 1
// const variable2 = "dua"
// let variable3 = false


// =====================================


// iniloh = 5

// console.log(iniloh)

// var iniloh


// ====================================
// let variable4

// variable4 = "empat"

// console.log(variable4)

// ====================================
// const variable5 = 10

// console.log(variable5)

// const pi = 3.14

// ==================================

// const myString = "ini string"
// let myNumber = 5

// let isLogin = false
// let isOpen = true

// console.log(belomada)

// ===================================

/**
 * 1 tambah +
 * 2 kurang -
 * 3 kali *
 * 4 bagi /
 * 5 mod % << sisa pembagian
 * 6 increment +1 dari currentValue ++
 * 7 decrement - dari currentValue --
 */

// let a = 5
// let b = 3

// let c = a + b // 8

// c += b // c = c + b ini adalah shorthand buat nambah

// cara memanipulasi html dengan js
// console.log(c)

// document.getElementById("mySpan").innerHTML = c

const myArray = [1,2,3,4,5] // 0 1 2 3 4 5

// for(let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i])
// }

// console.log(myArray[1])

// add value to array

myArray.push(10) // add to last index (1)

myArray.unshift(18) // add to first index (2)


// console.log(myArray)

// removee value from an array

myArray.pop() // remove last element (3)

myArray.shift() // remove first element (4)

// console.log(myArray)

myArray[2] = 20 // replace value di array (5)

// console.log(myArray)

const products = ['baju', 'celana', 'topi']

const foods = ['roti', 'kue']

// slice, splice

// const myArrayV2 = myArray.slice(1, 4)

// console.log(myArrayV2)
// console.log(myArray)


// const myArrayV3 = myArray.splice(1, 2)

// console.log(myArrayV3)

// console.log(myArray)

// ====== cara mendapat kan panjang dari array .length
// looping
// console.log(myArray.length)

// let myArrayV4 = []

// console.log(myArrayV4.length)

// if(myArrayV4.length  === 0 ){
//   console.log("dia kosong")
// }

// let nilai = 56

// equals == ===
// not equals != !==
// greater than >
// greater than eqals >=
// less than <
// less than equal <=

// and &&
// or ||
// not


// let valueA = 5
// let valueB = "5"

// console.log(valueA !== valueB)

// if (valueA !== valueB && true) {
//   console.log("sama")
// } else {
//   console.log("beda")
// }

//======= function
//bentuk basic function di js

function myFunction (param1, param2) {
  console.log(param1)
  console.log(param2)
}

myFunction("saya akan memakan buah apel", "kamis")

function addNumber (param1, param2) {
  console.log(param1 + param2)
}

addNumber(5,2)

function emptyFunction () {
  console.log("ini kosong")
}

emptyFunction()

function addNumberV2 (param1, param2) {
  const hasil = param1 + param2

  return hasil
}

const resultV1 = addNumberV2(5,2)

console.log(resultV1)

// bikin function yang ngebalikin nilai mahasiswa
// mesti ada return nya

/**
 * > 90 A
 * 
 * 79 > dan <90 B
 * 
 * <=79 C
 */

// if() {

// } else if () {

// } else if () {

// } else {

// }

// dari agung
// public coba (var a){
//   var hasil;
//   if (a > 90){
//      hasil = "A";
//   }else if (a> 79){
//    hasil = "B";
//   }else if(a < 79){
//    hasil = "C";
//   }else{
//     hasil = "Data Kosong";
//   }
  
//   return hasil;
// }

let counter = 0
document.getElementById("mySpan").innerHTML = counter

function addCounter () {
  counter++
  document.getElementById("mySpan").innerHTML = counter
}