// String, number, undefined, null, boolean
// const nome = 'Luiz'; // string
// const nome1 = "Luiz"; // string
// const nome2= `Luiz`; // string
// const num1 = 10; // number
// const num2 = 10.52; // number
// let nomeAluno; // undefined -> não aponta para local nenhum na memória
// const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
// const aprovado = true; // Booleano = true, false (lógico)

// console.log(typeof nome, nome);
// console.log(typeof num2, num2);
// console.log(typeof nomeAluno, nomeAluno);
// console.log(typeof sobrenomeAluno, sobrenomeAluno);
// console.log(typeof aprovado, aprovado);

// const a = [1, 2];
// const b = a;

// console.log(a, b);

// b.push(3);
// console.log(a, b);

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
