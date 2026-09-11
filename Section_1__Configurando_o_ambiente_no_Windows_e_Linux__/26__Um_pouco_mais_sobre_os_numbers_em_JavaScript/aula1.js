let num1 = 10;
let num2 = 2.5;

console.log(num1 + num2);
console.log(num1.toString + num2);
console.log(typeof num1);
console.log();

num1 = num1.toString();
console.log(typeof num1);
num1 = Number(num1);
console.log(typeof num1);
console.log(num1.toString(2));
console.log();

num1 = 10.6315465432131;
console.log(num1.toFixed(2));
num1 = 10;
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
console.log();

let temp = num1 * 'Olá';
console.log(temp);
console.log(Number.isNaN(temp));
temp = num1 * '5';
console.log(temp);
console.log(Number.isNaN(temp));
temp = num1 + '5';
console.log(temp);
console.log();
