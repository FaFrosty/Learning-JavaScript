let date = new Date()

console.log(date);
console.log(typeof date);
console.log(date.toString());

console.log(date.toDateString());
console.log(date.toTimeString());

console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

let newDate = new Date(2025, 0, 25)  // to create a customized date
console.log(newDate.toLocaleDateString());
let newTime = new Date(2025, 0, 25, 2, 4, 30)  // to create a customized date and time 
console.log(newTime.toLocaleString());

let newDate2 = new Date("07-03-2025")  // another method to create customized date
console.log(newDate2.toLocaleString());

let newDate3 = new Date()
console.log(newDate3.getMonth() + 1); 
console.log(newDate3.getDay());


let myTimeStamp = Date.now()
console.log(Date.now());  // get current timestamp in ms
console.log(Math.floor(Date.now()/1000));


newDate3.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate3.toLocaleString());

