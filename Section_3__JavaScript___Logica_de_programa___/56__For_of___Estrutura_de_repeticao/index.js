// const nome = 'Luiz Otávio';
// const nomes = ['Luiz', 'Otávio', 'Henrique'];

// // for (let  valor of nomes) {
// //     console.log(valor);
// // }


// nomes.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });

// For clássico - com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const pessoas = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
console.log('');

for (let chave in pessoas) {
    console.log(chave, pessoas[chave]);
}
console.log('');

for (let valor of pessoas) {
    console.log(valor);
}
