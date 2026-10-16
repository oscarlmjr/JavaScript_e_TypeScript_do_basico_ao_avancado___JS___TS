// const pontuacaoUsuario = 999;
const pontuacaoUsuario = 5000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuário normal'

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuário normal');
// }

// const corUsuario = null;
const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
