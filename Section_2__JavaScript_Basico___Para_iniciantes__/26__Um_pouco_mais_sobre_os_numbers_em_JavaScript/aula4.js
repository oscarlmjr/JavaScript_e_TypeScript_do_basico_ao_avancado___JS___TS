let num1 = 0.7; // number
let num2 = 0.1;  // number

num1 = (num1 * 100) + (num2 * 100);

console.log(num1);
console.log(Number.isInteger(num1));
console.log()

let num3 = 0.7; // number
let num4 = 0.1;  // number

num3 = ((num3 * 100) + (num4 * 100)) / 100;

console.log(num3);
console.log(Number.isInteger(num3));
console.log()

let num5 = 0.7; // number
let num6 = 0.1;  // number

num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.8
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.9
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 1.0

console.log(num5);
console.log(Number.isInteger(num5));