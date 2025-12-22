// {}--> obj
/*there are 2 ways to built an obj 
 1. literals 
 2. consturucter --> Object.create*/

//singleton ==> obj cretaed using constuructes are singleton

//-------------obj creation using literals----------
const user = {
    name: "bhargavi",
    age: 24,
    location: "budampadu"
}
// Access using . or [""]
// console.log(user.name)//. 
// console.log(user["name"]) //[""]


// how to change the values
user.name = "bhargavi_akula"
//console.log(user.name)
// freeze
// Object.freeze(user) // once u use freeze data will be freezed and all the values given after freezw will not be changed 
// user.name = "bhargavi"
// console.log(user.name)
// console.log(user);

//----giving greeting function-------
user.greeting = function(){
    console.log("hello")
}
console.log(user.greeting()); //hello 

//---------------giving greeting function refering to name

user.greetingTwo = function(){
    console.log(`hello, ${this.name}`);
}
console.log(user.greetingTwo()); // hello, bhargavi_akula