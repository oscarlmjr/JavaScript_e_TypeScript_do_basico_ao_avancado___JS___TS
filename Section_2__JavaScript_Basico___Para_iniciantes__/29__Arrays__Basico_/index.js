const lista = ['Luiz', 'Maria', 'João', 1, true, null];
console.log(lista);

const nome = 'Luiz Otávio'
console.log(nome[10]);

//                 0        1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]);

alunos[0] = 'Eduardo'; // Altera
alunos[3] = 'Luiza'; // Adiciona no fim
console.log(alunos.length);
alunos[alunos.length] = 'Fábio' // Adiciona no fim
console.log(alunos);
console.log('');

alunos.push('Otávio'); // Adiciona no fim
alunos.unshift('José'); // Adiciona no início
alunos.unshift('Gabriel'); // Adiciona no início
console.log(alunos);

