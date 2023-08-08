/*
Realiza un algoritmo para determinar cuánto pagará finalmente una persona
por un artículo, considerando que tiene un descuento de 20%, y debe pagar
15% de IVA (debe mostrar el precio con descuento y el precio final).
*/

function obtenerPrecio(){
    let precio = parseInt(prompt("Ingrese la cantidad de articulos: "));
    let cantArticulos = parseInt(prompt("Ingrese el precio: "))
    let precioTotal = precio * cantArticulos; //Obtener el precio total

    console.log("Precio total: ", precioTotal)

    return precioTotal
}

function calcularDescuento(precioTotal){
    let descuento = precioTotal - (precioTotal * 0.20);

    console.log("Precio con descuento: ", descuento);

    return descuento;
}

function calcularIva(precioTotal) {
    let iva = precioTotal + (precioTotal * 0.15);

    console.log("Precio con iva: ", iva);

    return iva;
}

function hallaPrecioFinal(){
    let precioObtenido = obtenerPrecio();
    let precioDescuento = calcularDescuento(precioObtenido);
    let preciofinal = calcularIva(precioDescuento);

    console.log("precio final: ", preciofinal)
}

hallaPrecioFinal();