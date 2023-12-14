/*
15-El presidente de la república ha decidido estimular a todos los estudiantes de
una universidad mediante la asignación de becas mensuales, para esto se
tomarán en consideración los siguientes criterios:
Para alumnos mayores de 18 años con promedio mayor o igual a 9, la beca
será de $200.000; con promedio mayor o igual a 7.5, de $100.000; para los
promedios menores de 7.5 pero mayores o iguales a 6.0, de $50.000; a los
demás se les enviará una carta de invitación a que estudien más en el
próximo ciclo escolar.
A los alumnos de 18 años o menores de esta edad, con promedios mayores
o iguales a 9, se les dará $300.000; con promedios menores a 9 pero
mayores o iguales a 8, $200.000; para los alumnos con promedios menores a
8 pero mayores o iguales a 6, se les dará $100.000, y a los alumnos que
tengan promedios menores a 6 se les enviará la carta de invitación.
*/

let edad = parseInt(prompt("Ingrese la edad: "));
let promedio = parseFloat(prompt("Ingrese el promedio: "));

if (edad > 18 && promedio == 9) {
    console.log("Tienes una beca de $200.000");
}else if (edad > 18 && promedio >= 7.5) {
    console.log("Tienes una beca de $100.000");
}else if (edad > 18 && promedio <= 7.5) {
    console.log("Tienes una beca de $50.000");
}else if (edad > 18 && promedio < 9) {
    console.log("¡Estudien más en el próximo ciclo escolar!");
}else if (edad <= 18 && promedio == 9) {
    console.log("Tienes una beca de $300.000");
}else if (edad <= 18 && (promedio < 9 || promedio >= 8)) {
    console.log("Tienes una beca de $200.000");
}else if (edad <= 18 && (promedio < 8 || promedio >= 6)) {
    console.log("Tienes una beca de $100.000");
}else if (edad <= 18 && promedio < 9){
    console.log("¡Estudien más en el próximo ciclo escolar!");
}