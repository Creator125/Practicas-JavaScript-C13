/*
Se quiere comparar la edad de una persona con la edad del participante, usando if...
else. Validar quien es mayor y cual es la diferencia entre las edades. Use
prompt(“Ingrese su edad de la persona:”) para obtener la edad como entrada.
*/

let edad1 = parseInt(prompt("Ingrese la edad: "));
let edad2 = parseInt(prompt("Ingrese la edad del participante: "));

if (edad1 > edad2) {
    alert(`La edad del usuario es mayor con ${edad1 - edad2} años de diferencia con el participante`);
}else if (edad1 < edad2) {
    alert(`La edad del paricipante es mayor con ${edad2 - edad1} años de diferencia con el usuario`);
}