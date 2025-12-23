
function sayMyName(){ // function=> keyword, sayMyName=> name ()=>syntax 
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("G");
    console.log("A");
    console.log("V");
    console.log("I")
}
//sayMyName ==> referance
//sayMyName()// function EXECUTION


// function addTwoNumbers(number1, number2){ //number1, number2==> values which we give near function decalarion is parameters 
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)//3,4==> there are arguments 

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result
    return number1 + number2 // same as above 2lines
}
const result = addTwoNumbers(3,4);
// console.log("Result:", result);


//==============================
// function loginUserMessage(username){
//     return `${username} logged in`
// }
// console.log(loginUserMessage("bhargavi"));
// console.log(loginUserMessage());// undefined logged in
//=============



function loginUserMessage(username){
    if(username === undefined){
        console.log("please provide username")
        return
    }
    return `${username} logged in`
}
console.log(loginUserMessage());

