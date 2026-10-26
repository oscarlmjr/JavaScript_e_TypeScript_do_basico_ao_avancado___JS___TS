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
const produto = { nome: 'Produto', preco: 1.8 };
// Object.defineProperties(produto, 'nome', {
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
});
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Outra coisa';
produto.preco = 'Outra coisa';
// delete produto.nome;
delete produto.preco;
console.log(produto);
