/*
Crea una calculadora simple que tome dos números y un operador (+, -, *, /) como
entrada y muestre el resultado de la operación.
*/

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let operador = prompt("Ingrese la operacion");
let resultado;

function sumar(a, b){
    let suma = a + b;
    return suma;
}

function restar(a, b){
    let resta = a - b;
    return resta;
}

function multiplicar(a, b){
    let mult = a * b;
    return mult;
}

function dividir(a, b){
    let div = a / b;
    return div;
}

switch (operador) {
    case "+":
        resultado = sumar(num1, num2);
        break;
    case "-":
        resultado = restar(num1, num2);
        break;
    case "*":
        resultado = multiplicar(num1, num2);
        break;
    case "/":
        resultado = dividir(num1, num2);
        break;

    default:
        resultado = "Error";
        break;
}

alert("Resultado = " + resultado);
