console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// when we compare with numbers it is easy to know
// when we compare with diff datatypes then its diff to underatsnd

console.log("2" > 1);
console.log("02" > 1); // o2 is coverted to 2 here

// reasion is that type coercion and comparisons.
// > and >= do numeric comparison → null becomes 0.
// == does not convert null to 0 → special rule: null only equals undefined.
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

// its everytime false only
console.log(undefined > 0);  
console.log(undefined == 0); 
console.log(undefined < 0); 


// === (strict check)
/*
The === operator is the strict equality operator in JavaScript.
It does not perform type coercion. Both value and type must match.
"2" is a string, while 2 is a number.
Since their types differ, the result is false.
*/
console.log("2" === 2);