//                 0        1       2
const alunos = ['Luiz', 'Maria', 'João', 'José', 'Eduardo', 'Luiza'];
alunos.pop();
console.log(alunos);
console.log('');

const removido = alunos.pop();
console.log(removido);
console.log(alunos);
console.log('');

const removido2 = alunos.shift();
console.log(removido2);
console.log(alunos);
console.log('');

delete alunos[1];
console.log(alunos[1]);
console.log(alunos);
console.log('');
