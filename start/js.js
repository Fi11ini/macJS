"use strict";

const arr = [
  "John",
  "Travolta",
  1,
  "Moscow",
  (3)[("Anna", "Peter", "Ivan")],
  7,
];

// const arr2 = []

// for(let i = 0; i < arr.length; i++) {
//     console.log(typeof arr[i])
//     arr2.push(typeof arr[i])
// }

// console.log(arr2)

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "string") continue;
//   console.log(arr[i]);
// } 


let someNumber = Math.floor(Math.random() * 10)
console.log(someNumber)

while(someNumber !== 10) {
    console.log(`Вам выпало число ${someNumber}`)
    someNumber = Math.floor(Math.random() * 10) + 1
} if(someNumber ===10) {
    console.log('Вы победили, вам выпало число 10')
}
