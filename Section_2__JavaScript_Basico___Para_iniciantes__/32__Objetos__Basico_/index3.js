function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Oliveira', 55);
const pessoa4 = criaPessoa('Junior', 'Moreira', 44);
const pessoa5 = criaPessoa('Jean', 'Miranda', 69);

console.log(pessoa1.nome,  pessoa2.nome);