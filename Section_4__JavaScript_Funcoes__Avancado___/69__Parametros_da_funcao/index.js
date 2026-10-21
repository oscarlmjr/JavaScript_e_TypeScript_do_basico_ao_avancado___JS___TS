// arguments sustenta todos os argumentos enviados
// function funcao() {
// function funcao(a, b, c) {
// function funcao(a, b, c, d, e, f) {
// function funcao(a, b) {
// function funcao(a, b = 2) {
function funcao(a, b = 2, c = 4) {
    // b = b || 0;
    // console.log('Oi');
    // console.log(arguments);
    // console.log(arguments[0]);
    // let total = 0;
    // for (let argumento of arguments) {
    //     total += argumento;
    // }
    // console.log(total, a, b, c);
    console.log(a + b + c);
}
// funcao('Valor', 1, 2, 3, 4, 5, 6, 7);
// funcao(1, 2, 3, 4, 5, 6, 7);
// funcao(2);
// funcao(2, 10);
// funcao(2, undefined, 20);
funcao(2, null, 20);
