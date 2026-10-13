const formulario = document.getElementById('formulario');
const dados = document.getElementById('dados');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    dados.style.color = 'green';
    dados.innerHTML += `<p>${nome}, ${sobrenome}, ${peso}, ${altura}</p>`;

    console.log( evento );
    // formulario.reset();
});