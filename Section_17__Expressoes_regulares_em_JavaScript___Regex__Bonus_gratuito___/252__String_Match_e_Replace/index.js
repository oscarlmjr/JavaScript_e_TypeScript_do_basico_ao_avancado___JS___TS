// g - global (encontra todas as ocorrências)
// i - insentive
// (()()) - grupos
// | ou

const { texto } = require('../250__Comecando_com_expressoes_regulares/base');
const regExp1 = /João|Maria/gi;


//   $1  $2 $3        $4    $5
// ( ... (  ()  ) )( ... )( ... ) 

// console.log(texto);
// console.log(texto.match(regExp1));
// console.log(texto.replace(/(João|Maria)/gi, '"$1"'));
// console.log(texto.replace(/(João|Maria)/gi, '<b>$1</b>'));
console.log(texto.replace(/(João|Maria)/gi, function(input) {
  return ' #####' + input.toLocaleUpperCase() + ' #####';
}));

