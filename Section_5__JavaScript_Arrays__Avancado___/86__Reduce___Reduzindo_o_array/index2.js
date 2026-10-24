// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor, indice, array) {
    if ( acumulador < valor.idade ) { acumulador = valor.idade };
    return acumulador;
}, 0);
console.log(pessoaMaisVelha);
