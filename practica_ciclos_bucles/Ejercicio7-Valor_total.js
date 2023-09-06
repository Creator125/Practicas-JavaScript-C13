/*
7- Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar; 
nombre del producto y su precio, que al final me muestra cuanto es el subtotal 
(precio sin IVA), cuánto es el IVA del 19% y cuál es el total que debe pagar una 
persona.
*/

let nombreProd;
let precio;
let subtotal = 0;

for (let i = 0; i <= 5; i++) {
    nombreProd = prompt("Ingrese el nombre del producto : ");
    precio = parseFloat(prompt(`Ingrese el precio de ${nombreProd}: `));
    subtotal += precio;
}

let total = subtotal + (subtotal * 0.19);

alert(`Subtotal: ${subtotal} \nTotal a pagar: ${subtotal}`);