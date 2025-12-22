//------numbers-----

const score = 400
// console.log(score) // 400 

const scores = new Number(400) // assigning to Number type
// console.log(scores) // [Number: 400]

// now the number type is converting into string
// console.log(scores.toString()) // 400
// console.log(scores.toFixed(4)) // 400.000 // toFixed() ==> used to set the fixed digits after decimals 

const otherNumber = 39.3476
// console.log(otherNumber.toPrecision(3)); //39.3 

// seperated the numbers
const numbersss = 100000000
// console.log(numbersss.toLocaleString()) // 100,000,000 (US format)
// console.log(numbersss.toLocaleString('en-IN')) //10,00,00,000 indian format



//----------------------Maths--------------------------

// console.log(Math)
// console.log(Math.abs(-5)); // abs= absolute value // conversts - ve value into +ve
// console.log(Math.round(5.9)); // round figure
// console.log(Math.ceil(5.9)); //6 // converts to upper value
// console.log(Math.floor(5.9)); //4 // converts to lower value
// console.log(Math.min(5, 6, 4, 9)); 
// console.log(Math.max(5, 6, 4, 9)); 

// console.log(Math.random()); // o/p will be in 0-1
// console.log((Math.random()*10) +1); // if 0.3 is output then when we apply floor we get only 0 so we are multipling with 10 and adding 1
// console.log((Math.floor(Math.random()*10) +1)); 

// if we have max and min and want to get the range in between

const max = 20
const min = 10
console.log(Math.random()* (max - min +1)); 
console.log(Math.floor(Math.random()* (max - min +1))+ min); 