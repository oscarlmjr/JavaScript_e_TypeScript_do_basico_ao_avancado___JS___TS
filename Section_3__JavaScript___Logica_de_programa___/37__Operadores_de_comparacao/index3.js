/*
Operadores de comparação
> maior que; >= maior ou igual a
< menor que; <= menor ou igual a
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)
*/
let num1 = 10; 
let num2 = 10;
let comp = num1 != num2;
console.log(comp); 
num1 = 10; // number
num2 = '10'; // string
comp = num1 != num2;
console.log(comp);
num1 = 10;
num2 = '10';
comp = num1 !== num2;
console.log(comp);
num1 = 10;
num2 = 'a';
comp = num1 !== num2;
console.log(comp);
num1 = 10;
num2 = 10;
comp = num1 !== num2;
console.log(comp);
