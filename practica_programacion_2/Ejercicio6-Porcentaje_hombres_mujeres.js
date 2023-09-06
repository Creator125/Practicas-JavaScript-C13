//6- Un maestro desea saber el porcentaje de hombres y de mujeres que hay en un grupo de estudiantes.

let cantHombres = parseInt(prompt("Ingrese la cantidad de hombres: "));
let cantMujeres = parseInt(prompt("Ingrese la canitidad de mujeres: "));
let cantEstudiantes = cantHombres + cantMujeres;
//Variables que calculan el porcentaje de cada genero
let porcHombres = (cantHombres * 100) / cantEstudiantes;
let porcMujeres = (cantMujeres * 100) / cantEstudiantes;

console.log("Porcentaje de hombres: ",porcHombres);
console.log("Porcentaje de mujeres: ", porcMujeres)
