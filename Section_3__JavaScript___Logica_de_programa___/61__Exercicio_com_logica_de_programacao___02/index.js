// Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem (width, height) {
//     // return width > height ? true : false; 
//     return width > height; 
// }

// let  frame = ePaisagem(2, 3);
// frame = ePaisagem(6, 3);
// console.log(frame);

const ePaisagem = (width, height) => width > height;

console.log(ePaisagem(1920, 1080));
