const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const pausado = document.querySelector('.pausa');
const zerar = document.querySelector('.zerar');
const zerado = document.querySelector('.zero');

function mostraHora() {
    data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
} 

var timer = setInterval(function () {
    relogio.innerHTML = mostraHora();
}, 1000);

let zerando = false;
function atualizarRelogio() {    
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    zerando = true
    data.setSeconds(data.getSeconds() + 1);
    return `${horas}:${minutos}:${segundos}`
};

iniciar.addEventListener('click', function(event) {
    
    if (zerado.classList.contains('zerado')) {
        timer = setInterval(function () {
            relogio.innerHTML = atualizarRelogio();
        }, 1000);
    } else if (pausado.classList.contains('pausado')  && zerando) {
        timer = setInterval(function () {
            relogio.innerHTML = atualizarRelogio();
        }, 1000);
    } else if (pausado.classList.contains('pausado')) {
        timer = setInterval(function () {
            relogio.innerHTML = mostraHora();
        }, 1000);
    };
    zerado.classList.remove('zerado');
    pausado.classList.remove('pausado');
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    pausado.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {

    data.setHours(0, 0, 0, 0);
    clearInterval(timer);

    relogio.innerHTML = atualizarRelogio();
    
    zerado.classList.add('zerado');
    console.log('data', data);
});

// pausado.classList.remove('pausado');
// console.log(zerado.classList.contains('classe-css'));
// console.log('Tipo do evento:', event.type);
// console.log('Elemento ativo (target):', event.target);
// console.log('ID do elemento:', event.target.id);