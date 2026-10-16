const verdadeira = true;

 // let tem escopo de bloco { ... bloco}
// var só tem escopo de função

let nome  = 'Luiz';
var nome2 = 'Luiz';

var nome2 = 'Otávio';


if (verdadeira) {
    let nome = 'Otávio';
    var nome2 = 'Rogério';
    // console.log(nome, nome2);

    if (verdadeira) {
        var nome2 = 'Ronaldo';
        let nome = 'Outra coisa';
}
}

console.log(nome, nome2);
