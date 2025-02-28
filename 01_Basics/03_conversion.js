// Converion from String to Number
let score = "34";

console.log(typeof score);

let valueInNumber = Number(score) // It will convert the "score" string into number.
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"34" => 34
"34abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/



// Conversion from Number to String

let anotherScore = 45;

let stringAnotherScore = String(anotherScore);
console.log(stringAnotherScore);
console.log(typeof (stringAnotherScore));

/*
45 => string
true/false => string
null => string
undefined => string
*/


// Conversion from Nubmer to Boolean

let isLoggedIn = 1;

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

/*
0 => False
1 => True
2,3... => True

"abc" => true
"" => false
null => false
undefined => false
*/


// Conversion from Boolean to Number

console.log(+true);  // result => 1
console.log(-true);  // result => -1
console.log(+false);  // result => 0
console.log(+"");  // result => 0


// Experiment on Object

let value = null;

let convertValue = Object(value);
console.log(convertValue);
console.log(typeof convertValue);

/*
12 => [Nubmer: 12]
abc => [String: abc]
true => [Boolean: true]
null => {}
undefined => {}

*/