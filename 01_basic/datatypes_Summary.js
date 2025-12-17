// primitive

// 7 types : string, number, boolean, null, undefined, symbol(make it unique), bigint

const id = Symbol('123')
const anotherId = Symbol('123') // both are different

const bigNumber = 64638936372928262527293n



// regerance (non primitive)
// array, objects, functions

// array
const heros = ["batman", "ironman"] 

//objects {}
let myObj = {
    name: "bhargavi",
    age: 22
}

//function(){} 
const myFunction = function(){
    console.log("hello world")
}

//************************************memory*******************************
// stack(primitives), heap (non primitives)

// stack -->when we use stack memory we get variable copy 
//heap -> will get referance (original values will be changed)


// stack 
let myName = "bh"
let anothername = myName 
anothername = "bha"

console.log(myName) // ba
console.log(anothername) //bha


//heap 
let useOne = {
    email : "bha.google.com",
}

let userTwo = useOne
userTwo.email = "akula@google.com"
// both get the same output==> akula@google.com 
console.log(userOne.email);
console.log(userTwo.email);