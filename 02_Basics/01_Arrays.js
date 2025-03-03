/*
**********ARRAYS**********
NOTES:- 1. Javascript arrays are resizable and can contain a mix of different datatypes.
 2. JS arrays are are not associative arrays and so, array elements cannot be accesed using arbitrary string as indexes.
*/

let myArr = [1, 4, 3, 7, 8]
 let newArr = new Array(1, 2, 3, 4, 5, 6)

 console.log(newArr[3]);
 
 myArr.push(9)  // adds a new element in array
 myArr.pop()  // removes last value
 myArr.unshift(5)  // adds an array at the start (not effiecient)
 myArr.shift()  // removes an array at the start (not effiecient)

console.log(myArr);
 
console.log(myArr.includes(7));  // check if the element is avlaible in that array or not
console.log(myArr.indexOf(7));  // check the position of that array

const strArr = myArr.join()  // converts all arrays into string
console.log(strArr);


//Slice and Splice

let spArr = [1,2,3,4,5,6,7]

console.log(spArr.slice(1, 3)); // it shows the selected index element, except last element

console.log(spArr.splice(1, 3));  // it removes and show the selected element from array 






let num1 = [1, 2, 3, 4]
let num2 = [5, 6, 7, 8]

num1.push(num2)  // this will merge 2 arrays but adds num2 inside num1
console.log(num1);
console.log(num1[4][2]); 


let mergeArr = num1.concat(num2)  //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(mergeArr);

const newMergedArr = [...num1, ...num2]  // works same as concat but this method is more preferable
console.log(newMergedArr);

let anotherArr = [1, 2, 3, [4, 5], 6, [7, [8, 9]]];
let another_anotherarray = anotherArr.flat(Infinity)  // Returns a new array with all sub-array elements concatenated
console.log(another_anotherarray);


console.log(Array.isArray('Farhan'));  //check if thats array or not
console.log(Array.from('Farhan'));  // Creates an array from an iterable object.


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.

