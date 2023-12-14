/*
Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo
se les pregunta el año en que nacieron. Realiza el algoritmo para solucionar
este problema.
*/

function cargarAnioNacimiento(){
    let anioNaciemiento = parseInt(prompt("Ingrese el año de naciemiento"));
    return anioNaciemiento;
}

function calcularEdad(anioNaciemiento){
    let anioActual = parseInt(prompt("Ingrese el año actual"));
    let edad = anioActual - anioNaciemiento;
    return edad;
}

function mostrarEdad(){
    const anioNacimiento = cargarAnioNacimiento();
    const edad = calcularEdad(anioNacimiento);

    console.log("Tu edad es: ", edad);
}

mostrarEdad();