//two types of data types
//1. Primitive

//7 types - String,Number,boolean, null, undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3
const turnedoff = false
const todaywork = null
const id = Symbol('123')



//2. reference( non-Primitive)

//array, objects,functions

const heros = ["shaktimann", "naagraj","doga"]
let myObj = {
    name: "gaurav",
    age: 21,
}

// javascript - dynamic typed language

const myfunc = function(){
    console.log("Hey my world");
}

// stack (primitive), 

let myyoutubename = "abc123"
let anname = myyoutubename
anname = "gaurav"

console.log(myyoutubename);
console.log(anname);

//Heap ( non-primitive)

let userone = {
    email: "abc@gmail.com" ,
    upi: "user@ybl"
}
let usertwo = userone

usertwo.email = "def@google.com"

console.log(userone.email);
console.log(usertwo.email);