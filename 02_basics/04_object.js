// line 2, 3 both are same but different forms 
// const user = new Object() // singleton obj
const user = {} // non singleton obj
user.id = "1234"
user.name = "bhargavi"
user.isLoggedIn =  false

// console.log(user);
const regularUser = {
    email:  "bha@gmail.com",
    fullname: {
        userfullname:{
            firstname: "bhargavi",
            lastname: "akula"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = { 1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
//const obj3 = Object.assign(obj1, obj2); // combining 2 obj into 1 using Object.assign()
const obj3 = {...obj1, ...obj2} 
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "bha@gmail.com"
    },
    {
        id: 1,
        email: "bha@gmail.com"
    },
    {
        id: 1,
        email: "bha@gmail.com"
    },
    {
        id: 1,
        email: "bha@gmail.com"
    },
]
console.log(users[1].email);

console.log(user); //{ id: '1234', name: 'bhargavi', isLoggedIn: false }
console.log(Object.keys(user)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(user)); //[ '1234', 'bhargavi', false ]
console.log(Object.entries(user));// [ [ 'id', '1234' ], [ 'name', 'bhargavi' ], [ 'isLoggedIn', false ] ]
console.log(user.hasOwnProperty('isLoggedIn')); // checking the property isLoggedIn is prsent in users or not

