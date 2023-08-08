/*
Un estacionamiento requiere determinar el cobro que debe aplicar a las
personas que lo utilizan. Considera que el cobro es con base en las horas
que lo disponen y que las fracciones de hora se toman como completas,
realiza el algoritmo que permita determinar el cobro.
*/

function obtenerTiempo(){
    let horas = parseInt(prompt("Ingrese las horas: "));
    let minutos = parseInt(prompt("Ingrese los minutos: "));
    let segundos = parseInt(prompt("Ingrese los segundos: "));
    tiempo = (horas * 3600) + (minutos * 60) + (segundos * 1);

    console.log("Tiempo total: ", tiempo);

    return tiempo;
}

function obtenerValor(tiempo) {
    let valorHoras = parseFloat(prompt("Ingrese el valor por horas: "));
    let valorPagar = valorHoras * tiempo;

    return valorPagar;
}

function determinarCobro() {
    const tiempoCalcualdo = obtenerTiempo();
    const cobroPagar = obtenerValor(tiempoCalcualdo);

    console.log("Valor total a pagar: ",cobroPagar);
}

determinarCobro();