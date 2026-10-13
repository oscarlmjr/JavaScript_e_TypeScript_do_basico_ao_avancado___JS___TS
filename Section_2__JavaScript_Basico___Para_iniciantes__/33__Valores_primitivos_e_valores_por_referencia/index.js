/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valor
*/
let nome = 'Luiz';
nome = 123;
console.log(nome);
nome = 'Otávio';
console.log(nome);
console.log(nome[0]);
nome[0] = 'R';
console.log(nome[0], nome);
console.log('');

let a = 'A';
let b = a; // Cópia
console.log(a, b);
console.log('');

a = 'Outra coisa';
console.log(a, b);
console.log('');
