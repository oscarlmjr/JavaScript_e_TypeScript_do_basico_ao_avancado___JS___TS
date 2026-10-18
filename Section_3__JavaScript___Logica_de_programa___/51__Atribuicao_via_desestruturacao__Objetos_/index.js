const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa);
console.log(pessoa.nome);
var nome = pessoa.nome;
console.log(nome);
console.log('');

// Atribuição via desestruturação
var { nome } = pessoa;
console.log(nome);
const { sobrenome, idade, endereco } = pessoa;
console.log(sobrenome, idade, endereco);