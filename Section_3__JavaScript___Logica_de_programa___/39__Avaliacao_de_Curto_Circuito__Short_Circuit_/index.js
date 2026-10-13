/*
&& -> false && true -> false "o valor mesmo"
|| -> 
FALSY
false
0
'' "" ``
null / undefined
NaN
*/
console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Luiz Otávio' && false && 'Maria');
console.log('Luiz Otávio' && '' && 'Maria');
console.log('Luiz Otávio' && "" && 'Maria');
console.log('Luiz Otávio' && `` && 'Maria');
console.log('Luiz Otávio' && null && 'Maria');
console.log('Luiz Otávio' && undefined && 'Maria');
console.log('Luiz Otávio' && NaN && 'Maria');
console.log('')
console.log('Luiz Otávio' && true && 'Maria');