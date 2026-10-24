// Filter, map, reduce

// Retorne os números maiores que 10
const numeros = [5, 50, 1, 2, 3, 5, 11, 22, 27];

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
const numerosFiltrados = numeros.filter(valor => valor >= 0);
    // console.log(valor);
    // console.log(valor, indice);
    // console.log(valor, indice, array);
    // return valor > 10
// });
console.log(numerosFiltrados);
