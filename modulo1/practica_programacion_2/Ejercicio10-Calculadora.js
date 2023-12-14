/*
10- Escribir un algoritmo que simule las operaciones básicas de una calculadora
suma, resta, multiplicación y división; esto con 2 números que se ingresen.
*/

function sumar(a, b){
    suma = a + b;
    return suma;
}

function restar(a, b){
    resta = a - b;
    return resta;
}

function multiplicar(a, b){
    mult = a * b;
    return mult;
}

function dividir(a, b){
    div = a + b;
    return div;
}

function menuOpcion() {
    let opcion = parseInt(prompt("Sleccione una opcion: \n"+
                                "(1) Sumar \n"+
                                "(2) Restar \n"+
                                "(3) Multiplicar \n"+
                                "(4) Dividir"));
    return opcion;
}

function obtenerResultado(){
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let selecionarOpcion = menuOpcion();
    let resultado;

    if(selecionarOpcion == 1){
        resultado = sumar(num1, num2);
    }else if(selecionarOpcion == 2){
        resultado = restar(num1, num2);
    }else if(selecionarOpcion == 3){
        resultado = multiplicar(num1, num2);
    }else if(selecionarOpcion == 4){
        resultado = dividir(num1, num2);
    }

    console.log("Resultado: ", resultado);
}

obtenerResultado();

//A corregir