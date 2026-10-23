// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    // console.log(11123455);
    // const nome = 'Luiz';
    // console.log(nome);
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);

(function() {

})();

// const nome = 'Qualquer coisa';
