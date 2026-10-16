// let nome  = 'Otávio';
let nome  = 'Luiz';

var nome2 = 'Luiz'; // var só tem escopo de função
// var nome2 = 'Otávio';

console.log(nome, nome2);

const verdadeira = true;

if (verdadeira) {
    let nome = 'Otávio'; // let tem escopo de bloco { ... bloco}
    console.log(nome, nome2);
}

{
    let nome = 'Otávio2'; // let tem escopo de bloco { ... bloco}
    console.log(nome, nome2);
}
