let num = 25;

let negative = -num; // It will convert the positve value to negative
console.log(negative);

/* ******************** JS-OPERATORS ******************** */

// ARITHMATIC OPERATORS

console.log(10 + 20); // adding two numbers
//console.log("Hello " + "Farhan"); // adding two strings
console.log(-30 + 40);
console.log(25 + 20 + 2);
console.log(10 - 20); // substracting two numbers
console.log(10 * 20); // Multiplication
console.log(10 ** 2); // exponentiation; 10 to the power of 2
console.log(20 / 10); // division
console.log(20 % 3); // modulas

let a = 5;
let b = 6;
a++   // Increment
b--   // Decrement

// --string and numbers
console.log("1" + 2); // result = 12 
console.log(1 + "2"); // result = 12 
console.log("1" + 2 + 3); // result = 123
console.log("1" + (2 + 3)); // result = 15
console.log(1 + 2 + "3"); // result = 33

// ASSIGNMENT OPERATOR

value = 10; // "=" used to assign value
value += 20; // // "+=" add and asigns, Now value = 30;
value -= 20; // "-=" sunstract and asigns, Now value = 10;
value *= 2; // "*=" multiply and asigns, Now value = 20;
value /= 2; // "/=" divide and asigns, Now value = 10;
value %= 4; // "%=" modulas and asigns Now value = 2;
value **= 2; // "**=" exponetiate and asigns Now value=4;

// COMPARISION OPERATOR

console.log(10 == 10); // "==" Is equal to
console.log("10" == 10); //(comparision of value); result = true; 
console.log(10 != 20); // "==" not equal to
console.log(10 === 10); // "==" Identical (equal value and type)
console.log("10" === 10); // (comparision of value and datatype); result = false
console.log(10 !== 20); // "==" Not Identical (not equal value and type)
console.log(20 > 10); // "==" Greater then 
console.log(10 < 20); // "==" Less then 
console.log(30 >= 20); // "==" Greater then or equal to 
console.log(20 <= 30); // "==" Less then or equal to 

// Comparision to boolean
console.log(true == (10 == 10));

// Comparision to Null (!avoid using these)
console.log(null == 0); // result = false
console.log(null > 0); // result = false
console.log(null >= 0); // result = True
// Explaination => The reason is that an Equality check == and Comparisions >< <= >= work differently.Comparision converts null into number, treating it as zero, that's why "null >= 0" = true and "null > 0" is false.


// LOGICAL OPERATOR

console.log(10 == 20 && 20 == 30); // "&&" = Logical AND 
console.log(10 == 20 || 20 == 20); // "||" = Logical OR 
console.log(!(10 == 20)); // "!" = Logical Not