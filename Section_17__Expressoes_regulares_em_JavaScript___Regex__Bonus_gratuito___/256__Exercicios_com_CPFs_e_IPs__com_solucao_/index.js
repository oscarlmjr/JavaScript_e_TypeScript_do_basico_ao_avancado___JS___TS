// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,}
// {10}

const { cpfs, ips } = require('../250__Comecando_com_expressoes_regulares/base');

console.log(cpfs);
console.log(cpfs.match(/[0-9|.|-]+/g));
console.log(ips);
console.log(ips.match(/[0-9|.]+/g));
