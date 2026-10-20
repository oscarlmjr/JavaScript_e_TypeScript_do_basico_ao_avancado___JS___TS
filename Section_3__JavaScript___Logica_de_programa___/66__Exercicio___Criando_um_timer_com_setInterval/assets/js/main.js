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
    console.log('innerHTML-i1', relogio.innerHTML);
    
    if (zerado.classList.contains('zerado')) {
        console.log('innerHTML-i2', relogio.innerHTML);
        timer = setInterval(function () {
            relogio.innerHTML = atualizarRelogio();
        }, 1000);
    } else if (pausado.classList.contains('pausado')  && zerando) {
        console.log('innerHTML-i3', relogio.innerHTML);
        timer = setInterval(function () {
            relogio.innerHTML = atualizarRelogio();
        }, 1000);
    } else {
        console.log('innerHTML-i4', relogio.innerHTML);
        timer = setInterval(function () {
            relogio.innerHTML = mostraHora();
        }, 1000);
    };
    zerado.classList.remove('zerado');
    pausado.classList.remove('pausado');
});

pausar.addEventListener('click', function(event) {
    console.log('.innerHTML-p', relogio.innerHTML);
    clearInterval(timer);
    pausado.classList.add('pausado');
});

zerar.addEventListener('click', function(event) {
    console.log('innerHTML-z1', relogio.innerHTML);

    data.setHours(0, 0, 0, 0);
    clearInterval(timer);

    relogio.innerHTML = atualizarRelogio();
    
    zerado.classList.add('zerado');
    console.log('data', data);
    console.log('innerHTML-z2', relogio.innerHTML);
});

// pausado.classList.remove('pausado');
    // let ano = tempo.getFullYear();
    // let mes = tempo.getMonth() + 1;
    // let dia = tempo.getDate();
    
    // data.setHours(0, 0, 0, 0);
    // const horas = String(data.getHours()).padStart(2, '0');
    // const minutos = String(data.getMinutes()).padStart(2, '0');
    // const segundos = String(data.getSeconds()).padStart(2, '0');
    // horaAtual = `${horas}:${minutos}:${segundos}`

// console.log(zerado.classList.contains('classe-css'));
// console.log('Tipo do evento:', event.type);
// console.log('Elemento ativo (target):', event.target);
// console.log('ID do elemento:', event.target.id);