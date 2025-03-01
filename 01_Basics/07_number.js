const score = new Number(200)
console.log(score);

console.log(score.toString()); //it will convert the number into string
//NOTE: now it is string, you can add string properties to it. e.g, = 
// console.log(score.toString().length)

const randNum = 123.543
console.log(randNum.toFixed(2)) // it will only let 2 numbers to be appear after decimal
console.log(randNum.toPrecision(3)); // it will give the precise value

const money = 1000000
console.log(money.toLocaleString()); // add comma's in between the value


