/*
4- Una distribuidora de huevos quiere contratarlo para que realice un algoritmo que 
calcule el precio de venta para una cantidad de huevos a llevar por un determinado 
cliente. Guiándose por la siguiente información:
*/

let cantHuevos = parseInt(prompt("Ingrese la cantidad de huevos: "));
let precio = 250 * cantHuevos;
let valorTotal;

if (cantHuevos <= 100) {
    valorTotal = precio - (precio * 0.3);
}else if(cantHuevos >= 102 || cantHuevos <= 200) {
    valorTotal = precio - (precio * 0.5);
}else if(cantHuevos >= 202 || cantHuevos <= 300) {
    valorTotal = precio - (precio * 0.8);
}else if(cantHuevos >= 102) {
    valorTotal = precio - (precio * 0.5);
}else{
    valorTotal = precio;
}

alert("Cantidad total a pagar: $" + valorTotal);