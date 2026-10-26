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
const produto = {nome: 'Produto', preco: 1.8};
Object.freeze(produto);
produto.nome = 'Outro nome';
// const caneca = Object.assign({}, produto);
// const caneca = Object.assign({}, produto, { material: 'porcelana' });
const caneca = { nome: produto.nome, preco: produto.preco };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
// console.log(Object.keys(produto));
console.log(produto);
