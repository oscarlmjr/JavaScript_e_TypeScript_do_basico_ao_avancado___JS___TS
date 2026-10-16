let A = 'A'; // B
let B = 'B'; // C
let C = 'C'; // A

[A, B, C] = [B, C, A]
console.log(A, B, C);

const numeros = [1, 2, 3];

[A, B, C] = numeros;
console.log(numeros);
console.log(A, B, C);
console.log('');

A = 'A'; // B
B = 'B'; // C
C = 'C'; // A

const letras = [B, C, A];

[A, B, C] = letras;
console.log(letras);
console.log(A, B, C);
console.log('');
