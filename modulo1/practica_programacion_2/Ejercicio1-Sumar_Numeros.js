//1- Escribir un algoritmo que valide si la suma de 2 números es positiva, negativa o cero.

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let suma = num1 + num2;

if(suma > 0){
    console.log(`La suma de ${num1} + ${num2} es positiva`);
}else if(suma < 0){
    console.log(`La suma de ${num1} + ${num2} es negativa`);
}else{
    console.log(`La suma de ${num1} + ${num2} es igual a 0`);
}

