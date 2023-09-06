/*
5- En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo 
que encuentre el promedio de edades de los estudiantes mayores de 21 años y el 
promedio de edades del resto de estudiantes. Por cada estudiante se tiene un 
registro que contiene su código y edad.
*/

let n = parseInt(prompt("Ingrese la cantidad de estudiantes: "));
let edad;
let codigo;
let cantMenores = 0;
let cantMayores = 0;

for (let i = 0; i <= n; i++) {
    codigo = prompt("Ingrese el codigo del estudiante: ");
    edad = parseInt(prompt(`Ingrese la edad del estudiante ${codigo}: `));
    
    if (edad > 21) {
        cantMayores += edad;
    }else{
        cantMenores += edad;
    }
}

let promeMayores = cantMayores / n;
let promeMenores = cantMenores / n;

alert("Promedio de estudiantes mayores de 21: "+ promeMayores + 
        "\nPromedio de estudiantes menores: " + promeMenores);

