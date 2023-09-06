/*
Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar; 
nombre del producto y su precio, que al final me muestra cuanto es el subtotal (precio sin iva), 
cuánto es el iva del 19% y cuál es el total que debe pagar una persona.
*/

let nombreProductos = [];
let precioProductos = [];
let subtotal = 0;
let iva = 0;
let total;

nombreProductos.forEach((producto) => {
    nombreProductos.push(producto = prompt("Ingrese el nombre del producto"));
});
