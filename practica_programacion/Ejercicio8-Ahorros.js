/*
Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
un año si considera que cada semana ahorra 15% de su sueldo (considera
cuatro semanas por mes y que no cambia el sueldo).
*/

function obtenerSueldo(){
    let sueldo = parseFloat(prompt("Ingrese el suedo: "));
    return sueldo;
}

function obtenerAhorro(sueldo){
    let ahorro = ((sueldo * 0.15) * 4) * 12;
    return ahorro;
}

function mostrarAhorros(){
    const sueldo = obtenerSueldo();
    const ahorros = obtenerAhorro(sueldo);
    let ahorroSemanal = sueldo * 0.15;
    let ahorroMensual = (sueldo * 0.15) * 4;

    console.log("Ahorro semanal: $", ahorroSemanal);
    console.log("Ahorro mensual: $", ahorroMensual);
    console.log("Sueldo en un año: $", ahorros);
}

mostrarAhorros();