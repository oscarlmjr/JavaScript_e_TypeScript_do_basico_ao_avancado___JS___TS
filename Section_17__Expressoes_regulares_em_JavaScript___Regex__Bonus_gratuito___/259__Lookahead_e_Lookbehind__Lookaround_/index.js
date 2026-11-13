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

const { lookahead } = require('../250__Comecando_com_expressoes_regulares/base');


console.log(lookahead);
console.log(lookahead.match(/(?<=ONLINE\s+).*/gim));
// Positive lookbehind (Frases que começam com ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim));
// Negative lookbehind (Frases que NÃO começam com ONLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));
