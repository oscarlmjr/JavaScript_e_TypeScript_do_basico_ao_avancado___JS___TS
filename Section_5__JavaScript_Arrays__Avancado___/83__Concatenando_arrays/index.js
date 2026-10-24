const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1 + a2;

console.log(a3);
console.log(typeof a3);
console.log('')

const a4 = a1.concat(a2);
console.log(a4);
console.log(typeof a4);
console.log('')

const a5 = a4.concat([7, 8, 9], 'Luiz');
console.log(a5);
console.log('')
// ... rest -> ... spread
const a6 = [a1, a2];
console.log(a6);
console.log('')

const a7 = [...a1, 'Luiz', a2, ...[7, 8, 9]];
console.log(a7);
console.log('')
