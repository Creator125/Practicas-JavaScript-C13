/*
13-Escribir un programa que al ingresar un valor del 1 al 7 imprima el día de la
semana al que corresponde.
*/

let num = parseInt(prompt("Ingrese el día de la semana"));

switch (num) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;

    default:
        console.log("No hay un dia de la semana asociado")
        break;
}