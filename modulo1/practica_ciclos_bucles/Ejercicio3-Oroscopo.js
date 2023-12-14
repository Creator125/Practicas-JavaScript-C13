/*
3- Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes al
que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el valor 
ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”.
*/

let mes = parseInt(prompt("Ingese la el numero del més: "));

switch (mes) {
    case 1:
        alert("Enero, Capricornio y Acuario");
        break;
    case 2:
        alert("Febrero, Acuario y Piscis");
        break;
    case 3:
        alert("Marzo, Piscis y Aries");
        break;
    case 4:
        alert("Abril, Aries y Tauro");
        break;
    case 5:
        alert("Mayo, Tauro y Géminis");
        break;
    case 6:
        alert("Junio, Géminis y Cáncer");
        break;
    case 7:
        alert("Julio, Cáncer y Leo");
        break;
    case 8:
        alert("Agosto, Leo y Virgo");
        break;
    case 9:
        alert("Septiembre, Virgo y Libra");
        break;
    case 10:
        alert("Octubre, Libra y Escorpio");
        break;
    case 11:
        alert("Noviembre, Escorpio y Sagitario");
        break;
    case 12:
        alert("Diciembre, Sagitario y Capricornio");
        break;

    default:
        alert("No hay un mes asociado a ese numero");
        break;
}