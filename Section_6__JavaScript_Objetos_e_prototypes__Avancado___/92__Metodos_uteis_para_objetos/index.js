/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
// const produto = {nome: 'Caneca', preco: 1.8};
const produto = {nome: 'Produto', preco: 1.8};
// const outraCoisa = produto;
// const outraCoisa = { ...produto };
const caneca = { 
    ...produto,
    material: 'porcelana'
 };

// produto.nome = 'Luiz Otávio';
// outraCoisa.nome = 'Luiz Otávio';
caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
