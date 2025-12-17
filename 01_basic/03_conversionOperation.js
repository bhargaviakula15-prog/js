/*
let score = 33 // number type

//below both are same but diff formats to check 
console.log(typeof score);
console.log(typeof(score));
*/

let score = "33" // string 

console.log(typeof score);
console.log(typeof(score));

//if we want to work on numbers and our variable is in diff format then we will convert them

let valueInNumber = Number(score) //converting score into number
console.log(typeof valueInNumber) //checking type
console.log(valueInNumber) //printing the variable 

//"33" => 33
//"33abc" => NaN (not a number)
//true => 1; false =>0

// convering to boolean
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


//1 ==> true, 0 => false
//""=> false
//"bh" ==> true


// converting to string
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))