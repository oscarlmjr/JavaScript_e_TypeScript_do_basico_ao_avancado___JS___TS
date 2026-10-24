const pessoa = { nome: 'Luiz', sobrenome: 'Otávio'};
console.log(pessoa.nome, pessoa['sobrenome']);

const chave = 'sobrenome';
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);
console.log('');

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
console.log(pessoa.nome, pessoa['sobrenome']);
console.log('');

delete pessoa1.nome;
console.log(pessoa1);
console.log('');

pessoa1.falarNome = function() {
    console.log(`${pessoa1.sobrenome} está falando seu nome.`);
    console.log(`${this.sobrenome} está falando seu nome.`);
};
console.log(pessoa1);
pessoa1.falarNome();
