/*
11- Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes
al que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el
valor ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”.
*/

let mes = parseInt(prompt("Ingese la el numero del més: "));

switch (mes) {
    case 1:
        console.log("Enero, Capricornio y Acuario");
        break;
    case 2:
        console.log("Febrero, Acuario y Piscis");
        break;
    case 3:
        console.log("Marzo, Piscis y Aries");
        break;
    case 4:
        console.log("Abril, Aries y Tauro");
        break;
    case 5:
        console.log("Mayo, Tauro y Géminis");
        break;
    case 6:
        console.log("Junio, Géminis y Cáncer");
        break;
    case 7:
        console.log("Julio, Cáncer y Leo");
        break;
    case 8:
        console.log("Agosto, Leo y Virgo");
        break;
    case 9:
        console.log("Septiembre, Virgo y Libra");
        break;
    case 10:
        console.log("Octubre, Libra y Escorpio");
        break;
    case 11:
        console.log("Noviembre, Escorpio y Sagitario");
        break;
    case 12:
        console.log("Diciembre, Sagitario y Capricornio");
        break;

    default:
        console.log("No hay un mes asociado a ese numero");
        break;
}