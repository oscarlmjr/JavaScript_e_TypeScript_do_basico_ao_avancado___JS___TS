// g - global (encontra todas as ocorrências)
// i - insentive
// (()()) - grupos
// | ou
// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1
// \ Caractere de escape
// {n,m} mínimo e máximo
// {10,}
// {10}

const { texto, arquivos } = require('../250__Comecando_com_expressoes_regulares/base');

// const regExp2 = /\.(jp(e)?g)/g
const regExp2 = /\.((jp|JP)(e|E)*(g|G))/g

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);
  // if(!valido) continue;
  console.log(arquivo,  valido);
}
