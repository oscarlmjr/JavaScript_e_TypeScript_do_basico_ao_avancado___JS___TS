/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
FALSY
false
0
'' "" ``
null / undefined
NaN
*/
console.log(0 || false || null || 'Luiz Otávio' || true);

// const corUsuario = null;
const corUsuario = 'azul';
const corPadrao = corUsuario || 'red';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
console.log(a || b || 'Joãozinho' || d || e);
