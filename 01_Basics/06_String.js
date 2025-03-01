let name = "Farhan";
let age = 22;

console.log("Hello my name is " + name + " and my age is " + age );

console.log(`Hello my name is ${name} and my age is ${age}.`); // more efficient and better

const username = new String('frosty') // another method to declare string 

console.log(username[0]);
console.log(username.charAt(0)); // check the character at that position.

console.log(username.indexOf('f')); // check the position of that character.
console.log(username.length); // check the string length.

console.log(username.toUpperCase()); // convert the string value to uppercase.

console.log(username.substring(0, 4)); // it will print the character except last one
console.log(username.slice(-5, 4)); 

console.log(username.trim()); // it removes unwanted spaces from start and end. (similar methods => trimStart, trimEnd)

const url = "https://google.com/farhan%20akhter"
console.log(url.replace('%20', '-')); // it replaces the character inside string

console.log(url.includes('farhan')); // it will check if that given character in inside the string or not.

const value = "Hello-world"
console.log(value.split('-')) // it will remove that '-' and put the in array.
console.log(value.split())






