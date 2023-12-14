/*
Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
generando presupuestos para cada cliente
*/

function ingresarCobro(){
    let m = parseInt(prompt("Ingrese el cobro: "));
    return m;
}

function calcularCobro(m) {
    let cobro = m ** 2;
    return cobro;
}

function mostrarCobro(){
    const cobroObtenido = ingresarCobro();
    const cobroCalculado = cobroObtenido;

    console.log("El combro por trabajos de pinturas es: ", cobroCalculado);
}

mostrarCobro();

//En duda