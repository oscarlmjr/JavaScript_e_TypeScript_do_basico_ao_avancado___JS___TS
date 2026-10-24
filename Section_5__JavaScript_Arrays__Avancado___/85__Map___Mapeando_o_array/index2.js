// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// const nomes = pessoas.map(obj => obj.nome);
// const idades = pessoas.map(function(obj) {
// const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    // obj.id = indice;
    // delete obj.nome;
    // return obj;
    return newObj;
    // return { idade: obj.idade };
});
// console.log(nomes);
// console.log(idades);
console.log(comIds);
console.log(pessoas);
