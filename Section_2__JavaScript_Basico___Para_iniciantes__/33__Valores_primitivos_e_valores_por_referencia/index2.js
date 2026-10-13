/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores  copiados

Referência (mutável) - array, object, function = Passados por referência
*/
let a = [1, 2, 3];
let b = a;
console.log(a, b);
console.log('');

a = 'Outra coisa';
console.log(a, b);
console.log('');

a = [1, 2, 3];
b = a;
a.push(4);
console.log(a, b);
console.log('');

b.pop();
console.log(a, b);
console.log('');

a.push('Luiz');
let c = b;
console.log(a, b, c);
console.log('');
