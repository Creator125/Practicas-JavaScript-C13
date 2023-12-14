/*
8- Se desea elaborar un algoritmo que determine cuántas personas de un grupo
tienen hijos y cuántos no tienen, además se desea conocer el promedio del número 
de hijos
*/

let usuarios = parseInt(prompt("Ingrese la cantidad de usuarios: "));
let cantHijos;
let contadorConHijos = 0;
let contadorSinHijos = 0;

let i = 0;

while (i <= usuarios) {
    cantHijos = parseInt(prompt("Ingrese la cantidad de hijos: "));

    if (cantHijos != 0) {
        contadorConHijos++;
    }else{
        contadorSinHijos++;
    }

    i++;
}

let promedioConHijos = contadorConHijos / usuarios;
let promedioSinHijos = contadorSinHijos / usuarios;

alert(`Personas con hijos: ${contadorConHijos} \nPromedio: ${promedioConHijos}\n
    \nPersonas sin hijos: ${contadorSinHijos} \nPromedio: ${promedioSinHijos}`);