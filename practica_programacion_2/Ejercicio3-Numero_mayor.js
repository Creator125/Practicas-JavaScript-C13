//3- Escribir un algoritmo que indique cuál es el mayor de tres números ingresados.

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tecer numero: "));
let numMayor;

if(num1 > num2 && num1 > num3){
    numMayor = num1;
}else if(num2 > num1 && num2 > num3){
    numMayor = num2;
}else{ //num3 es mayor o todos son iguales
    numMayor = num3;
}

console.log("Numero mayor: ", numMayor);