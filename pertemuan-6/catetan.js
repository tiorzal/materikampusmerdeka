// PERCABANGAN
console.log('BAGIAN PERCABANGAN')
// ===================================================================

let a = 1
let b = 3
// if else dan if else if
let nilai = 90
if (nilai > 90) { // a = 1, b = 3 >> false
  console.log('masuk bracket true')
} else if ( nilai > 79 && nilai < 91 ) { // a = 1, b = 3 >> true
  console.log('masuk bracket true ke 2')
} else {
  console.log('masuk bracket false')
}

let switchVariable = 100

// switch case
switch (true) {
  case (switchVariable > 90):
    console.log('A')
    break;
  case (switchVariable > 79 && switchVariable < 91):
    console.log('b')
    break;
  default:
    console.log('c')
    break;
}

// ternary operator
let ternaryVariable = 20

if(ternaryVariable === 20) {
  console.log('dia 20')
} else {
  console.log('dia bukan 20')
}
// ( kondisi nya apa )   ? 'hasil true' : 'hasil false nya apa'
(ternaryVariable === 20) ? console.log('dia 20') : console.log('dia bukan 20')

//versi riweuh nya
(ternaryVariable === 20) ? console.log('dia 20') : (ternaryVariable === 20) ? console.log('wkwkw') : console.log('dia bukan 20')

// PERULANGAN
console.log('BAGIAN PERULANGAN')
// ===================================================================

/**
 * 1 for
 * 2 while
 * 3 do while
 */

// while bakal cek kondisi dulu baru jalanin isi block
console.log('> while')
let i = 0
while (i <= 5) { // 5 < 5 => false
  console.log(i)
  i++
}

// do while jalanin dulu isi block nya, terus dia baru bakal cek kondisi
console.log('> do while')
let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

//for
// console.log('> for')
// for (variable awal; kondisi berenti nya apa; apa yang terjadi di tiap loop)
for(let k = 0; k < 5; k++) {
  console.log(k)
  if(k === 3){
    break
  }
}

// trick lucu
// how to stop a loop with break statement
console.log('> breaking loop')
let l = 0

while (true) {
  if (l > 5) {
    break
  }
  l++
  console.log(l)
}

console.log('> example breaking loop')

// example of break usage
let nama = 'kevin'

for(let kevin = 0; kevin < nama.length; kevin++) {
  console.log(nama[kevin])
  if (nama[kevin] === 'v') {
    break
  }
}

console.log('> another example breaking loop')
let emailStr = 'elsa@gmail.com'

let stringResult = ''
for(let email = 0; email < emailStr.length; email++) {
  console.log(emailStr[email])
  if(emailStr[email] === '@') {
    break
  }
  stringResult += emailStr[email]
}

console.log(stringResult)

// array method forEach
console.log('> for each')

let nama2 = ['fauzan', 'indira', 'agung', 'malik']

nama2.forEach((e, index) => {
  console.log(e, index)
})

// nested loop
console.log('> nested loop example')

// loop 1
for(let loop1 = 0; loop1 < 3; loop1++) { // loop1 = 1
  console.log('loop pertama',loop1)
  for(let loop2 = 0; loop2 < 3; loop2++) {
    console.log(loop2, 'saat loop 1 nya', loop1)
  }
}



/**
 *       *
 *      ***
 *     *****
 *----*******
 *     *****
 *      ***
 *       *
 */

 // maksimal cuman ada 3 for
 // di terminal js, tidak ada /n
 // string + something

 console.log('   *')
 console.log('  ***')
 console.log(' *****')
 console.log('  ***')
 console.log('   *')

// ini dari dewa

function dariDewa () {
  let n = 3;
  let myString = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
      myString += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      myString += "*";
    }
    myString += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      myString += " ";
    }
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      myString += "*";
    }
    myString += "\n";
  }

  return myString
}

function dariAgung () {
  const rows = 4;

    for (let i = 1; i <= rows; i++) {
    console.log(' '.repeat(rows - i) + '*'.repeat(i * 2 - 1));
    }

    for (let i = rows - 1; i >= 1; i--) {
    console.log(' '.repeat(rows - i) + '*'.repeat(i * 2 - 1));
    }
}

function dariIkhsan () {
  let tinggi = 4;
  let mystring = "";

  for (let i = 1; i <= tinggi; i++) {
    for (let j = 1; j <= tinggi - i; j++) {
      mystring += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      mystring += "*";
    }

    mystring += "\n";
  }

  for (let i = tinggi - 1; i >= 1; i--) {

    for (let j = 1; j <= tinggi - i; j++) {
      mystring += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) { 

    }
  }

  return mystring
}

console.log('dari dewa dengan 6 for 2n^2')
console.log(dariDewa())

console.log('dari agung dengan 2 for, sisanya repeat')
dariAgung()