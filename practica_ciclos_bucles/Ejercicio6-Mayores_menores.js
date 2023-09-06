/*
6- Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes.
El algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son
menores de edad.
*/

let edad;
let cantMenores = 0;
let cantMayores = 0;

for (let i = 1; i <= 10; i++) {
    edad = parseInt(prompt(`Ingrese la edad del estudiante #${i}: `));
    
    if (edad >= 18) {
        cantMayores++;
    }else{
        cantMenores++;
    }
}

alert(`Estudiantes mayores: ${cantMayores} \nEstudiantes menores: ${cantMenores}`);