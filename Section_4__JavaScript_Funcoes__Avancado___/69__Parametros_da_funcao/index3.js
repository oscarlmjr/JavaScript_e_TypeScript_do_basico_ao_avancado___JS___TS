// function conta(operador, acumulador, ...numeros) {
// const conta = (operador, acumulador, ...numeros) => {
const conta = (...args) => {
    console.log(args);
    // for(let numero of numeros) {
    //     if (operador === '+') acumulador += numero;
    //     if (operador === '-') acumulador -= numero;
    //     if (operador === '/') acumulador /= numero;
    //     if (operador === '*') acumulador *= numero;
    // }
    // console.log(acumulador);
    // console.log(arguments);
// }
};
conta('+', 1, 20, 30, 40, 50);