/*
Una empresa importadora desea determinar cuántos dólares puede adquirir con determinada
cantidad de pesos. Realiza el algoritmo para tal fin.
*/

function obtenerCOP(){
    let cop = parseInt(prompt("Ingrese el valor a comvertir: "));

    console.log("Valor a COP: ", cop)

    return cop;
}

function calcularUSD(cop) {
    let usd = cop / 4104;
    return usd;
}

function imprimirValor() {
    const ValorPesoObtenido = obtenerCOP();
    const valorDolar = calcularUSD(ValorPesoObtenido)

    console.log("Valor a USD: ", valorDolar);
}

imprimirValor();
