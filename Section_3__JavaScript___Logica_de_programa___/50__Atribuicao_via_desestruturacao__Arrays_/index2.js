const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [primeiroNumero, segundoNumero] = numeros;
const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero);
console.log(resto);

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco,  sete);
