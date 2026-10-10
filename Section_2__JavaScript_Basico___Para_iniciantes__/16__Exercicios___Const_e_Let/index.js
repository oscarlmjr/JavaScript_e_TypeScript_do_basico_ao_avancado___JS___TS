/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8  de altura e seu IMC é de 25.925925925925
Luiz Otávio  nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc
let anoNascimento

// imc = peso (altura ** 2)

imc = peso / altura ** 2;
anoNascimento = 2025 - idade

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ', e pesa ' + peso)
console.log('tem', altura, 'de altura e seu IMC é', imc)
console.log(`${nome} nasceu em ${anoNascimento}`)