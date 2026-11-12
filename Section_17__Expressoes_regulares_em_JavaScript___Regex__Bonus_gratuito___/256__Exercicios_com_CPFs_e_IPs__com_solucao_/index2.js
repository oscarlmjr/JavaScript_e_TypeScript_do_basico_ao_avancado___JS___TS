// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,}
// {10}

const { cpfs, ips } = require('../250__Comecando_com_expressoes_regulares/base');

// console.log(cpfs);
// console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
// console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
// console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

// 250 - 255 25[0-5]
// 200 - 249 2[0-4][0-9]
// 100 - 199 1\d{2}
// 10  - 99  [1-9]\d
// 0   - 9   \d
// ^ -> Começa com
// $ -> Termina com

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
// const ipRegExp = /(25[0-5])(\.)/g;

// for (let i = 0; i <= 300; i++) {
//   const ip = `${i}.${i}.${i}.${i}`;
//   console.log(ip, ip.match(ipRegExp));
// }

console.log(ips);
console.log(ips.match(ipRegExp));
