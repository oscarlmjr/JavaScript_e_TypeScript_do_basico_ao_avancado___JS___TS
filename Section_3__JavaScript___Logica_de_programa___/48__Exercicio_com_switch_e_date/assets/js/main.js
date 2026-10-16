
function dataPadraoTexto (diaSemana, dia, mes, ano, hora, minutos) {
    const dataApresentacao = document.getElementById('data-padrao');

    let diaSemanal;
    let mesAno = mes;
    switch (diaSemana) {
    case 0:
        diaSemanal = 'domingo';
        break
    case 1:
        diaSemanal = 'segunda-feira';
        break
    case 2:
        diaSemanal = 'terça-feira';
        break
    case 3:
        diaSemanal = 'quarta-feira';
        break
    case 4:
        diaSemanal = 'quinta-feira';
        break
    case 5:
        diaSemanal = 'sexta-feira';
        break
    case 6:
        diaSemanal = 'sábado';
        break
    default:
        return diaSemanal = ''
    }

    function zeroAEsquerda(num) {
        return num >= 10 ? num: `0${num}`;
    }

    mesLista = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    mesAno = mesLista[mesAno];

    zeroAEsquerda(minutos)
    dataApresentacao.innerHTML = `${diaSemanal}, ${dia} de ${mesAno} de ` +
    `${ano} ${hora}:${zeroAEsquerda(minutos)}`;
}

const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

const dataPadrao = dataPadraoTexto(diaSemana, dia, mes, ano, hora, minutos, 
    segundos);
console.log(dataPadrao);
