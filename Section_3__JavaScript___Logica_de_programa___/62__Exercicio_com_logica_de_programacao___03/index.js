// Escreva uma função que receba um número e retorne:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número  é realmente um número
// Use a função com números de 0 a 100
function FizzBuzz (num) {
    if (num % 15 == 0 ) {
        return 'FizzBuzz';
    } else if (num % 3 == 0) {
        return 'Fizz';
    } else if (num % 5 == 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

let i = 0
while (i <= 10) {
    // const geraNumero = FizzBuzz(Math.floor(Math.random(0, 100) * 100));
    const geraNumero = FizzBuzz(0);
    console.log(geraNumero);
    i++;
}

