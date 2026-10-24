// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice , array) {
    // if (valor % 2 === 0) acumulador.push(valor);
    // if (valor % 2 !== 0) acumulador.push(valor);
    // acumulador.push(valor * 2);
    // if(valor % 2 === 0) {
    if(valor % 2 !== 0) {
        acumulador += valor;
    };
    // acumulador += valor;
    // console.log(acumulador, valor);
    return acumulador;
}, 0);
// });
console.log(total);
