/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores  copiados

Referência (mutável) - array, object, function = Passados por referência
*/
const d = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const e = d;

d.nome = 'João';
console.log(d, e);
console.log('');

const f = {...d};

d.nome = 'Luiz';
console.log(d, f);
console.log('');
