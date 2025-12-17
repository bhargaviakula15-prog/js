
// ********************** conversions ******************************



/*
let score = 33 // number type

//below both are same but diff formats to check 
console.log(typeof score);
console.log(typeof(score));
*/

let score = "33" // string 

//console.log(typeof score);
//console.log(typeof(score));

//if we want to work on numbers and our variable is in diff format then we will convert them

let valueInNumber = Number(score) //converting score into number
//console.log(typeof valueInNumber) //checking type
//console.log(valueInNumber) //printing the variable 

//"33" => 33
//"33abc" => NaN (not a number)
//true => 1; false =>0

// convering to boolean
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)


//1 ==> true, 0 => false
//""=> false
//"bh" ==> true


// converting to string
let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof(stringNumber))



// ********************** operations ******************************

let value = 3
let negvalue = -value
//console.log(negvalue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);
// console.log(2/2);

let str1 = "hi"
let str2 = " hello" // if u did not give space before h all the contetnt is merging with out space in output
let str3 = str1 + str2
//console.log(str3);

console.log("1" +2);
console.log(1 +"2");
console.log("1" +2 + 2);// output: 122 //if we have string at beginning it is merging all the values
console.log(1 + 2 +"2"); //output: 32 //if we have string at end it is adding starting values and then merging the values

//console.log(true) // output: true
//console.log(+true) // 1
//console.log(true+) // error
//console.log(+"") // 0

// study postfix and prefix operators 
//https://tc39.es/ecma262/#sec-type-conversion



let x = 3;
const y = x++; // 1st X is value is goint to y, so we get initial value to y , later the value is getting increment and added to x

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" 

let a = 3;
const b = ++a; // 1st a is value is getting increment and assigning to b and later same incremeted value is assigning to a
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"  