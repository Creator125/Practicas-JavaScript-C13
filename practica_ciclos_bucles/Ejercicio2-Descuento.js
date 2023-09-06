/*
2- Realizar un algoritmo que calcule el porcentaje de descuento que va a tener un 
cliente dependiendo de los siguientes datos:

- Si el cliente compró un carro o una moto, el descuento será del 15%

- Si el cliente compró una bicicleta o una patineta, el descuento será del 10%

- Si el cliente compró un scooter eléctrico, el descuento será del 5%
*/

let articulo = parseInt(prompt(`Selecione un articulo:
                                (1) Moto
                                (2) Carro
                                (3) Bicicleta
                                (4) Patineta 
                                (5) Scooter eléctrico`));

if (!isNaN(articulo)) {
    if (articulo == 1 || articulo == 2){
        alert("Tu un descuento es del 15%");
    }else if (articulo == 3 || articulo == 4){
        alert("Tu un descuento es del 10%");
    }else if (articulo == 5){
        alert("Tu un descuento es del 5%");
    }else{
        alert("Solo es posible selecionar del 1 al 5");
    }
} else {
    alert("Valor invalido");
}