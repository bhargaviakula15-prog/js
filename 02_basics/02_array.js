const fruits = ["apple", "banana", "grapes"]
const veg = ["carrot", "ladies fringer", "potato"]

//fruits.push(veg)
//console.log(fruits); // here we got an array in another array
/* output  
[
  'apple',
  'banana',
  'grapes',
  [ 'carrot', 'ladies fringer', 'potato' ]
]

*/

// ------------------------------concat --> combines all elements into 1 array ------------------------------------

const allIteams = fruits.concat(veg)
console.log(allIteams); // [ 'apple', 'banana', 'grapes', 'carrot', 'ladies fringer', 'potato' ]

//-----------------------------[...]-->spread--------------
const allIteamsss = [...fruits, ...veg]
console.log(allIteamsss) // [ 'apple', 'banana', 'grapes', 'carrot', 'ladies fringer', 'potato' ]


//--------------flat()-------------------------
// if u have array in another array and want to get all elements into single array we wuse flat

const another_array = [1,2, [3,4], 5, 6,[2,4], 7, 8, [6,9,[6]]]
const all_merged_array = another_array.flat(Infinity) // infinity will combine all the arrays into single array 
console.log(all_merged_array)

//---------------------------Array.from()-->conversts into array
console.log(Array.from("bhargavi"))
/*
[
  'b', 'h', 'a',
  'r', 'g', 'a',
  'v', 'i'
]
  */


//-------------we have diff values and want to convert into array--> Array.of()
let score1 = 1001
let score2 = 1000
let score3 = 1030
let score4 = 1002
console.log(Array.of(score1, score2, score3, score4)) // [ 1001, 1000, 1030, 1002 ]

