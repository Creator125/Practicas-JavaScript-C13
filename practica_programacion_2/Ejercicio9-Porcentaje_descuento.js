/*
9- Realizar un algoritmo que calcule el porcentaje de descuento que va a tener
un cliente dependiendo de los siguientes datos:

- Si el cliente compró un carro o una moto, el descuento será del 15%
- Si el cliente compró una bicicleta o una patineta, el descuento será del 10%
- Si el cliente compró un scooter eléctrico, el descuento será del 5%
*/

let tipoProducto = parseInt(prompt("Elija el produto a comprar: \n"+
                                    "(1) Carro \n"+
                                    "(2) Moto \n"+
                                    "(3) Bicicleta \n"+
                                    "(4) Patineta \n"+
                                    "(5) Scooter eléctrico"));

if(tipoProducto == 1 || tipoProducto == 2){
    console.log("Tu descuento será del 15%");
}else if(tipoProducto == 3 || tipoProducto == 4){
    console.log("Tu descuento será del 10%");
}else if(tipoProducto == 5){
    console.log("Tu descuento será del 5%");
}