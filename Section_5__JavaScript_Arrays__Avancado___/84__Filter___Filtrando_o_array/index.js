// Filter, map, reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 1, 2, 3, 5, 11, 22, 27];

// function callbackFilter(valor, indice, array) {
// function callbackFilter(valor) {
//     return valor > 10;
//     // if (valor > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// }

// const numerosFiltrados = numeros.filter(callbackFilter);
// const numerosFiltrados = numeros.filter(function (valor) {return valor > 10});
// const numerosFiltrados = numeros.filter((valor) => {return valor > 10});
// const numerosFiltrados = numeros.filter(valor => {return valor > 10});
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);
