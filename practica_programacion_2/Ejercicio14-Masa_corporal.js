//14- Escribir un algoritmo para calcular el índice de masa corporal de una persona.

let peso = parseFloat(prompt("Ingrese el peso"));
let estatura = parseFloat(prompt("Ingrese la estaura"));
let imc = peso / (estatura * estatura);

if (imc < 18.5) {
    console.log("El usuario tiene un peso Bajo");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("El usuario tiene un peso Normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("El usuario sufre de Sobrepeso");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("El usuario sufre de obesidad I");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("El usuario sufre de obesidad II");
} else if (imc >= 40) {
    console.log("El usuario sufre de obesidad II");
}
