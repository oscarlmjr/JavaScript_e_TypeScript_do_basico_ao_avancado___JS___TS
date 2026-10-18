// Escreva uma função que receba 2 números e retorne o maior deles

function gerarNumeros (num1, num2) {
    num1 = Math.floor(Math.random() * 10)
    num2 = Math.floor(Math.random() * 10)
    console.log('num1, num2', num1, num2);

    return maiorNumero(num1, num2);
}


function maiorNumero (num1, num2) {

    while (num1 <= num2) {
        console.log(num1, num2);

        return gerarNumeros (num1, num2);
    }
    return num1;
}


const functMaiorNumero = gerarNumeros();
console.log(functMaiorNumero);
