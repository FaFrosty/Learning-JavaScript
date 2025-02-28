/* Random note---*/ "use strict"; // treat all JS code as newer version


let yourName = "farhan"; // string datatype
let age = 22; // number datatype
const bigNumber = 123456789012345655n // adding n at the end defines it as bigint
let isloggedIn = true; // boolean datatype
let temp = null;
let userEmail; // undefined
const Id = Symbol('123') // Symbol datatype
const userId = Symbol('123') // Same value but the return value is not same

console.log(typeof "farhan", typeof 22, typeof true); // we use "typeof" to check the type of datatype of the value.

console.log(typeof name, typeof age, typeof (isloggedIn))

console.log(typeof undefined, typeof null); // type of undefiend is undefined but type of null is object!


/*
*************** Types of Datatypes ***************

1. Primitive DataType

7 types : String, Number, BigInt, Boolean, Null, Undefined, Symbol

    string => ""
    number => upto 2 to the power 53
    bigint => Big values or scientific values
    boolean => true/false
    null => standalonevalue & null is an Object
    undefined => variable without value has the value defined
    symbol => add uniqueness

2. Reference (NonPremitive)

Array, Object, Function
*/
const superheros = ["hulk", "Spiderman", "thor"]; // array

let myObj = {
    name: "Farhan",
    age2: 22,
    isOnline: true
}   // Object 

const myFunction = function(){
    console.log("Hello World");
}   // Function inside variable

// */