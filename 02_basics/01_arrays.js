// arrays []
// resizable, mixed types


// array declaration types

//const myArr = [ 10, 11, 12, 13]
// const myArr = ["10", "11"]
// const myArr = new Array(1,2,2) // here there is no need to use [] 

// console.log(myArr);
// console.log(myArr[3]); // output 13 //accessing the array based on index


//array methods
// myArr.push(6) // adding element 
// myArr.pop() // alst element is removed
//console.log(myArr);

// myArr.unshift(7) // adding element at begining
// myArr.shift() // removing element from begining
// console.log(myArr);

//  console.log(myArr.includes(10)); // if no. is present in array
// console.log(myArr.indexOf(11)); // index of no. array

//  join() --> joins the array and converst into string
// const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);


// slice, splice
const myArr = [ 10, 11, 12, 13, 14, 15]
console.log(myArr)
const myNewArray1 = myArr. slice(1,3)
console.log(myNewArray1) // 1,2 index values will be diaplayed

const myNewArray2 = myArr. splice(1,3)
console.log(myNewArray2) // 1,2, 3 index values will be diaplayed

