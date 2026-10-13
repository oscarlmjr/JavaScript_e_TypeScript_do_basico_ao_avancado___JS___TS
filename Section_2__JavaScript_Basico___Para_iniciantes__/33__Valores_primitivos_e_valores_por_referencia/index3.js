/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores  copiados

Referência (mutável) - array, object, function = Passados por referência
*/
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b, c);
console.log('');

a.push(4);
b.pop();
console.log(a, b, c);
console.log('');

const d = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const e = d;

d.nome = 'João';
console.log(d, e);
console.log('');