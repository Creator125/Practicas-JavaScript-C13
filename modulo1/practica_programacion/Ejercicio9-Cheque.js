/*
Una empresa desea determinar el monto de un cheque que debe
proporcionar a uno de sus empleados que tendrá que viajar durante un
determinado número de días. Los gastos que cubre la empresa son: hotel,
comida y 200 pesos diarios para otros gastos. El monto debe estar
desglosado para cada concepto. Realiza un algoritmo que determine el
monto del cheque.
*/

function obtenerCosto(){
    let costoHotel = parseFloat(prompt("Ingrese el costo para el hotel: "));
    let costoComida = parseFloat(prompt("Ingrese el costo para la comida: "));
    let costoTotal = costoHotel + costoComida + 200;
    return costoTotal;
}

function imprimirCheque() {
    let montoCheque = obtenerCosto();

    console.log("Monto total del cheque: ", montoCheque);
}

imprimirCheque();