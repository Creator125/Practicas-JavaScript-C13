/*
Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes. 
El algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son menores de edad
*/

let edad;
let contMayores = 0;
let contMenores = 0;

for (let i = 1; i <= 10; i++) {
    edad = parseInt(prompt(`Ingrese la edad del estudiante ${i}`));
    
    if (edad >= 18) {
        contMayores += 1;
    }else{
        contMenores += 1;
    }
}

alert("Estudiantes mayores de edad: " + contMayores + "\n" +
    "Estudiantes menores de edad: " + contMenores);