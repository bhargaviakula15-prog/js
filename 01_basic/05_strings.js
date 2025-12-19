//const name = "bh";
const age = 20

// console.log(name + age) // string concatination

// ${``}  ==> string interpolation is new techinique for concatination of string 
//` ==> is tilte which is present down to esc button
//console.log(` ${name}  ${age}`);
//console.log(`hello my name is ${name} and my age is ${age}`);

// string declaration

const name = new String('bhargavi')
console.log(name);
console.log(name.length);
console.log(name[0]); // checking which letter is present in 0th position
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(1)); // checking the charater in 1st position
console.log(name.indexOf('h')); // checking the index position of h

console.log(name.substring(1, 3)) // only 1st and 2nd postion values will be given as output
console.log(name.slice(0, 5))// we can do -ve slicing also ex: console.log(name.slice(-6, 5))

// trim ==> remove extra spaces
const newName = "      bhargavi     "
console.log(newName)
console.log(newName.trim())

// replace
//const place = "budampadu"
//console.log(place.replace('bud', 'abc'))

console.log(name.replace('bhargavi', 'harsha'))


//---------
console.log(name.includes('bhargavi')) // includes() used to check if we have any contanat included or not

// split() ==> used to split the contant based on space, - // example --> bhargavi akula
const names = "bhargavi akula"
console.log(names.split(' ')) // spliting using space

const namess = "bhargavi-akula"
console.log(namess.split('-')) // spliting using -
