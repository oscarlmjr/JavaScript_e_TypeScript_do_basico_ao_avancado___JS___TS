// Declaração de função (Function hoisting)
falaOi();

function falaOi() {
    console.log('Oi');
}
console.log('')
// First-class objects (Objetos de primeira classe)
// Function Expressions
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();
console.log('')

const souUmDado2 = function nomeDaFuncao() {
    console.log('Sou um dado2');
};
souUmDado2();
console.log('')

function executaFuncao(funcao) {
    console.log('Vou executar sua função  abaixo:')
    funcao();
}
executaFuncao(souUmDado2);
console.log('')
