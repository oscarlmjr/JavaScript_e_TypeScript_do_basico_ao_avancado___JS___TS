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
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

// for (let entry of Object.entries(produto)) {
//     console.log(entry);
// for (let [chave, valor] of Object.entries(produto)) {
for (let valor of Object.entries(produto)) {
    // console.log(chave, valor);
    console.log(valor[0], valor[1]);
}
