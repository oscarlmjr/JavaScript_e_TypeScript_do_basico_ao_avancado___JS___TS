//                 0        1       2
const alunos = ['Luiz', 'Maria', 'João' ];
console.log(alunos[50]);
console.log('');

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));
console.log(alunos.slice(0, -1));
console.log('');

console.log(typeof alunos);
console.log(alunos instanceof Array);

let alunos2 = ['Luiz', 'Maria', 'João' ];
alunos2 = 123
console.log(typeof alunos2);
console.log(alunos2 instanceof Array);
