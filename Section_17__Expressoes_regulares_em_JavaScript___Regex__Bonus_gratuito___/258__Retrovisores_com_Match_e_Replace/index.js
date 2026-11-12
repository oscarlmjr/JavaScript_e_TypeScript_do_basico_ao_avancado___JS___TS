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
// $1 $2 $3 -> Retrovisores \1

const { html2 } = require('../250__Comecando_com_expressoes_regulares/base');


console.log(html2);
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));
console.log(html2.replace(/(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $4 HAHA $5'));
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));
