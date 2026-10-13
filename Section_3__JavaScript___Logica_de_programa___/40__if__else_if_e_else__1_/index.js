/*
Entre 0 - 11 Bom dia
Entre 12 - 17 Bom tarde
Entre 18 - 23 Boa noite
*/

// If pode ser usado sozinho

// const hora = 10;
// const hora = 12;
// const hora = 18;
const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
}else {
    console.log('Olá');
}

