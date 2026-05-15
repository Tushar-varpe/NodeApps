// primitive datatype

//7 types :string,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 199.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId)
const bigNumber = 2345678765432765n

console.log(typeof outsideTemp)
console.log(typeof isLoggedIn)
console.log(typeof scoreValue)
console.log(typeof anotherId)
console.log(typeof bigNumber )
// reference datatype(non primitive)

// Array,Objects,Function

const cricket = ["test","odi","t20","IPl"];
let myObj = {
    name: "Tushar",
    age: 20
}
const myFunction = function(){
}
console.log(typeof myFunction)
console.log(typeof cricket)


// stack(primitive),heap(non-primitive) memory

let myYoutubename = "Tushar varpe"
let anothername = myYoutubename
anothername = "cricket"
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
 let userTwo = userOne

 userTwo.email = "Tusharvarpe@gmail.com"
 console.log(userOne.email)
 console.log(userTwo.email)