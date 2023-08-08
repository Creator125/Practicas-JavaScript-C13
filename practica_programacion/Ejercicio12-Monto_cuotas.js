/*
Dado un número real que representa el valor total de una compra, informar
las posibles formas de pago según la siguiente tabla. Específica los datos de
entrada, de salida, estrategia.

1 cuota de $................. (0% de recargo)
2 cuotas de $................. total $................. ( 5% de recargo)
6 cuotas de $................. total $................. ( 40% de recargo)
*/

function obtenerValorCompra(){
    let valorcompra = parseFloat(prompt("Ingrese el valor total de tu compra: "));
    return valorcompra;
}

function formaPago(){
    let opcion = parseInt(prompt("¿Cuantas cuotas deseas pagar (1, 2 o 6)?: "));
    return opcion;
}

function pago(){
    const valorCompra = obtenerValorCompra();
    const cuotas = formaPago();

    switch (cuotas) {
        case 1:
            console.log(`1 cuota de $${valorCompra} (0% de recargo)`);
            break;
        case 2:
            console.log(`1 cuota de $${valorCompra} total $${valorCompra * cuotas} ( 5% de recargo)`);
            break;
        case 6:
            console.log(`1 cuota de $${valorCompra} total $${valorCompra * cuotas} ( 40% de recargo)`);
            break;
    
        default:
            console.log("Solo es posible 1, 2 o 6 cuotas");
            break;
    }
}

pago();