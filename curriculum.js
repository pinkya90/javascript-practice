// 1.0 Intro
// -- What is JavaScript and how does it work?
// -- Install VSCode
// -- Install NodeJS

// 2.0 Node commands in terminal - (Ctrl + `) to open terminal
// -- Running a file
// -- Killing a file

// 3.0 Variables
// -- Hello world
// -- Console.log()
console.log("hello world")
// -- Variables
const mySentence="hello world"

let numberOfEggs=4;// let declaration allows us to reassign new value whereas const does not

numberOfEggs = 6
console.log(numberOfEggs + 6, mySentence)
// -- Code comments
// -- Assignment by reference

let newNumberOfEggs = numberOfEggs

// 4.0 Data Types (init / read / write)
// -- Strings

let myString = "hello this is pinky"

let extendedString = myString +  " and i like reading books"

console.log (extendedString)
console.log(myString[4])

// -- Numbers

const favNumber =16
// -- Arrays defined using []

const groceryList = ["eggs",
    "apple",
    "juice",
    "pineapple",
    21
]
groceryList[3]= "tooth brush"
console.log(groceryList[3])

// -- Objects defined using {key : value}

const dictonary = {
    ocean : " a body of water between different states",
    sea : " a diiferent body water",
    myFavNumber : 21 
}

const user = {
name : "pinky",
emailid : "pinky@gmail.com"
}

console .log (user.name , user ["emailid"])

user.name ="shilpa"
user["emailid"] = "shilpa@gmail.com"

console .log(user)

// -- Null
const unknownNumber = null
// -- Undefined

const undefinedValue = undefined 

console.log (unknownNumber,undefinedValue)
// -- Booleans (true/false)
const isPinkyGood =true
let isTeaBad = false 

// 5.0 Recap

// 6.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 4+5
console.log('SUM: ', sum)

const minus = 6-3
console.log('MINUS: ', minus)

const divisor = 15/6
console.log ('DIVISOR: ',divisor)

const remainder = 15%6
console.log('REMAINDER: ', remainder)


// -- Logical operators (|| &&)

const y=21
if(y>10 && y<20){

    console.log("the value was greater than 10 , and also less than 20")
}
else {
    console.log("the value was not greater than 10 , or it was greater than 20 ")
}

const z=2
if(z>10 || z< 20 ){
    console.log ("the value of z is greater 10 or less than 20")
}
else{
    console.log(" the value of z is neither greater than 10 nor less than 20 ")
}

// -- Type of

const randomNumber =1989

console.log(typeof randomNumber, typeof 'random string')

// 7.0 Conditional Statements
// -- If else

const x=14
if(x>10){
    //whatever code is written here is conditionally excuted
    console.log("the value of x is greater than 10")

}
else {
    console.log("the value of x is not greater than 10 ")
}
// else if concept
const v= "abc"
if(v=="xyz"){
    console.log("value matched in if ")
}
else if(v=="abc"){
console.log("valued matched in else if ")
}
else{
    console.log("value not found")
}

// difference btw == & === (== type is not checked)
const a=0, b="0"
if(a==b){
    console.log(" a & b are same")
}
else{
    console.log(" a & b are not same")
    
}
// (=== type is checked)
const a1=0, b1="0"
if(a1===b1){
    console.log(" a & b are same")
}
else{
    console.log(" a & b are not same")
    
}

// 8.0 Loops
// -- While loop

let i=0;

while(i<5){
    console.log('The value of i is :', i)
    i=i+1;
}
// -- For loop

for(j=0;j<10;j++){
    //this is repeatable code
    console.log(j)
}

const animals=['dog','cat','cow','horse']
console.log(animals)

for (k=0;k<animals.length;k++){
    const stringToPrint = 'The animal at index : '  +  k  +  ' And the value at that index : '  +  animals[k]
    console.log(stringToPrint)
}

// -- Continue & break
const vegtables=['tomato','beans','carrot','onion']
console.log(vegtables)

for (l=0;l<vegtables.length;l++){
    const currentVegtable= vegtables[l]

    if(currentVegtable=='beans'){
        continue
    }
if(currentVegtable==='carrot'){
    break
}
    const stringToPrint = 'The animal at index : '  +  l  +  ' And the value at that index : '  +  currentVegtable
        console.log(stringToPrint)
}


// 9.0 Functions
// -- Create a function

function printSquare (y,z){
    console.log(y*z)
}
printSquare(4,6)

// -- Invoke a function
function addString (s1,s2){
    const concatString = s1+s2
    console.log(concatString)

}
addString("hello",  " world")
    addString("hello", " pinky")
    


// -- Return

function addString (s1,s2){
    const concatString = s1+s2
    console.log(concatString)
    return concatString
}
const newString = addString("hello",  " earth")
    addString("hello", " cool")
    console.log("NewString : " , newString)

    // return with if statement and type of 

    function addString (s1,s2){
        const concatString = s1+s2
        console.log(concatString)
        if(typeof s1!=="string" || typeof s2 !== "string"){
            return
        }
        return concatString
    }
    const newString1 = addString(2 ,  " earth")
        addString("hello", " cool")
        console.log("NewString1 : " , newString1)
    
// -- Default inputs

function addString (s1 = "Hello", s2 = " World"){
    const concatString = s1+s2
    console.log(concatString)
    if(typeof s1!=="string" || typeof s2 !== "string"){
        return
    }
    return concatString
}
const newString2 = addString(" earth " , "is round ")
    addString("hello", " cool")
    console.log("NewString1 : " , newString2)

// -- Arrow functions

const arrowFunction = (arg )=>{
console.log("ArG :", arg)
}
arrowFunction("hello")

//try catch 

try{
    //throw "not a string"
    // a=10+2
    // throw TypeError()
    throw TypeError("this message will be printed")
}

catch(e){
    if(e instanceof TypeError){
        console.log(e.message)
        // console.log("already declared cannot use")
    }
// console.log(e)
}
finally{
    console.log("there was no exception")
}

//higher order functions
//function calling new function ( callback function)

const p= [1,2,3,4]
const p1 =[]
for(i of p ){
p1.push(i*2)
}
console.log(p1)

// callback with a function

function mulBy(arg){
return arg*2
}
const p2=p.map(mulBy)
console.log(p2)

//callback with a arrow function
const p3=p.map((arg2)=>arg2*2)
console.log(p3)

