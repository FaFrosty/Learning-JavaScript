console.log(Math);
// try that on browser's console to see all values of Math

console.log(Math.PI);
console.log(Math.abs(-4)); // absolute, will convert negative value into positive

console.log(Math.round(4.4)); //it will give you a roundoff of that given value
console.log(Math.ceil(4.4));
console.log(Math.floor(4.9));

console.log(Math.sqrt(16)); // returns the square root of that value

console.log(Math.min(4, 5, 7, 3)); // return the smaller value
console.log(Math.max(4, 5, 7, 3)); // return the larger value

console.log(Math.random()); // Returns a random value betweem 0 to 1.

console.log(Math.random()*10);
console.log((Math.random()*10) + 1); // now the value will be between 1 to 10.

console.log(Math.floor(Math.random()*10) + 1); // now it will return a roundoff value


min = 10
max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
