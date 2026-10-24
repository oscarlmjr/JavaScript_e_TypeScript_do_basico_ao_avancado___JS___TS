const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// const pessoasComNomeGrande = pessoas.filter(function(valor) {
// const pessoasComNomeGrande = pessoas.filter(function(obj) {
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
// const nomeTerminaComA = pessoas.filter(function(obj) {
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
// console.log(valor);
    // console.log(valor.nome);
    // return obj.nome.length >= 7;
// }); 
console.log(nomeTerminaComA);
