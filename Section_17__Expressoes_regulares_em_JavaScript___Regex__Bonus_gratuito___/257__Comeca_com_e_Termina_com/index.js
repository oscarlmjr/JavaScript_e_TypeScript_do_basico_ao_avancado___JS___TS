// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,}
// {10}
// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline

const { cpfs, cpfs2 } = require('../250__Comecando_com_expressoes_regulares/base');

const cpf = '254.224.877-45';
const cpfRegExp = /(\d{3}\.){2}\d{3}\-\d{2}/g;
console.log(cpf.match(cpfRegExp));
const cpfRegExp2 = /^(\d{3}\.){2}\d{3}\-\d{2}/g;
console.log(cpf.match(cpfRegExp2));
console.log(cpfs.match(cpfRegExp2));
console.log(cpfs.match(cpfRegExp));
const cpf3 = ' 254.224.877-45';
console.log(cpf3.match(cpfRegExp2));
console.log(cpfs2);
const cpfRegExp3 = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2.match(cpfRegExp3));
