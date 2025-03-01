// Stack Memory(Premitive) & Heap Memory(Non-premitive)

// premitive
let main1 = "Farhan"

let main2 = main1;
main2 = "Akhter"

console.log(main1);
console.log(main2);


// non premitive

let user1 = {
    id: 2345,
    name: "farhan",
}
 
let user2 = user1;
user2.name = "Akhter"

console.log(user1.name);
console.log(user2.name);
