// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,}
// {10}

const { alfabeto } = require('../250__Comecando_com_expressoes_regulares/base');

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g));
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W/g));
