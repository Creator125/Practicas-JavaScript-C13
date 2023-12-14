/*
1- Realizar un programa en el que el usuario introduzca el número del mes (1 al 12) 
y se muestra al final si ese mes es de 30 o 31 días.
*/

let nuMes = parseInt(prompt("Ingrese el numero del mes: "));
let dias;

switch (nuMes) {
    case 1:
        dias = 31;
        break;
    case 2:
        dias = 28;
        break;
    case 3:
        dias = 31;
        break;
    case 4:
        dias = 30;
        break;
    case 5:
        dias = 31;
        break;
    case 6:
        dias = 30;
        break;
    case 7:
        dias = 31;
        break;
    case 8:
        dias = 31;
        break;
    case 9:
        dias = 30;
        break;
    case 10:
        dias = 31;
        break;
    case 11:
        dias = 30;
        break;
    case 12:
        dias = 31;
        break;

    default:
        console.log("No esxiste un mes asociado");
        break;
}

alert(`El mes ${nuMes} tiene ${dias} dias`);