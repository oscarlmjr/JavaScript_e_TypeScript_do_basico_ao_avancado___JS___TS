const numeroDigitado = Number(prompt('Digite um número:'));

document.getElementById("num1").textContent = numeroDigitado;
document.getElementById("num2").textContent = numeroDigitado;
document.getElementById("raiz-quadrada").textContent = numeroDigitado ** 0.5;
document.getElementById("inteiro").textContent = Number.isInteger(numeroDigitado);
document.getElementById("nan").textContent = Number.isNaN(numeroDigitado);
document.getElementById("arredondar-baixo").textContent = Math.floor(numeroDigitado);
document.getElementById("arredondar-cima").textContent = Math.ceil(numeroDigitado);
document.getElementById("casas-decimais").textContent = numeroDigitado.toFixed(2);
