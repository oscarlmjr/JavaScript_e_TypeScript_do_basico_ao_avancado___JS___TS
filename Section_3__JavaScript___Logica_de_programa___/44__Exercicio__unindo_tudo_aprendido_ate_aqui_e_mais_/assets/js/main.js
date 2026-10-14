function meuEscopo () {
    const form = document.querySelector('.form');
    const calculo = document.querySelector('.calculo');
    const invalido = document.querySelector('.invalido');

    const imc = [];
    
    function recebeEventForm (evento) {
        evento.preventDefault(evento);

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        imc.push({
            peso: parseFloat(peso.value),
            altura: parseFloat(altura.value)
        });

        const calculoImc =  (parseFloat(peso.value) / parseFloat(altura.value) ** 2).toFixed(2);

        if (calculoImc < 18.5) {
            calculo.innerHTML += `<p>Seu IMC é ${calculoImc} (Abaixo do peso)</p>`;
        } else if (18.5 <= calculoImc && calculoImc <= 24.9) {
            calculo.innerHTML += `<p>Seu IMC é ${calculoImc} (Peso normal)</p>`;
        } else if (25 <= calculoImc && calculoImc <= 29.9) {
            calculo.innerHTML += `<p>Seu IMC é ${calculoImc} (Soprepeso)</p>`;
        } else if (30 <= calculoImc && calculoImc <= 34.9) {
            calculo.innerHTML += `<p>Seu IMC é ${calculoImc} (Obesidade grau 1)</p>`;
        } else if (35 <= calculoImc && calculoImc <= 39.9) {
            calculo.innerHTML += `<p>Seu IMC é ${calculoImc} (Obesidade grau 2)</p>`;
        } else if (40 < calculoImc ) {
            calculo.innerHTML += `<p>Seu IMC é ${calculoImc} (Obesidade grau 3)</p>`;
        }
        console.log(imc);
    };

    form.addEventListener('submit', recebeEventForm)
}

meuEscopo();
