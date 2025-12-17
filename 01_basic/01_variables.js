//const cant be changed 
const accountId = 144553
let accountEmail = "bhargavi@gmail.com"
var accountPassword = "23567"
accountCity = "Budampadu"
// here we are just decalring the variable but not assigning any values so we get as undefined
let accountState;

//accountId = 14 // not allowed

// for constance we need to use cons
// but for variables we can use let and var
accountEmail = "bha@gmail.com"
accountPassword = "2"
accountCity = "Bu"
//only perticular fiels can be displayed
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

// if u want all the fields to be seen at once we use table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])