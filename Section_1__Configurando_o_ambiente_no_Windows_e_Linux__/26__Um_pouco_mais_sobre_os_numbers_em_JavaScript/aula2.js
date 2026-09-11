// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1;  // number

console.log(num1 + num2);

num1 += num2;
console.log(num1);

num1 += num2;
num1 += num2;
console.log(num1);

num1 = num1.toFixed(2);
console.log(num1);
console.log(Number.isInteger(num1));
console.log(Number.isInteger(1.00));
console.log();

let num3 = 0.7; // number
let num4 = 0.1;  // number

num3 += num4;
num3 += num4;
num3 += num4;
num3 += num4;

num3 = parseFloat(num3.toFixed(2))
console.log(num3);
console.log(Number.isInteger(num3));

