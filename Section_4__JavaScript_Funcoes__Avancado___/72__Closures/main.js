// Global
// function retornaFuncao() {
function retornaFuncao(nome) {
    // const nome = 'Luiz';
    return function() {
        return nome;
    };
}

// const funcao = retornaFuncao();
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
// console.log(funcao);
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());