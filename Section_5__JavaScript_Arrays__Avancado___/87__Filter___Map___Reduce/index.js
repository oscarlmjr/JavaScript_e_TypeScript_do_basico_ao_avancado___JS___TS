// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os  valores
// Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDoDobro = numeros.reduce(function(acumulador, valor, indice , array) {
    if(valor % 2 === 0) { acumulador += valor * 2 };
    return acumulador;
}, 0);
console.log(somaDoDobro);

const filtrarPares = numeros.filter(function(valor) {
    if(valor % 2 === 0) return valor;
});
console.log(filtrarPares);

const somarTudo = numeros.map(function(valor, indice , array) {
    return valor * 2;
});
console.log(somarTudo);
