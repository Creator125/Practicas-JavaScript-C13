let n = parseInt(prompt("Ingrese la cantidad de alumnos y notas a registar"));;
let alumnos = [];
let notas = [];

//Agragar alumnos y notas
for (let i = 0; i < n; i++) {
    alumnos[i] = prompt("Ingrese el nombre del alumno: ");
    notas[i] = parseFloat(prompt("Ingrese la nota: "));
}

let notaMayor;
let alumnoNotaMayor;

//Buscando cual es al alumno con una mayor nota
for (let i = 0; i < n; i++) {
    if (notas[i+1] > notas[i]) {
        notaMayor = notas[i+1];
        alumnoNotaMayor = alumnos[i+1];
    }
}

alert(`El alumno con nota mayor es ${alumnoNotaMayor} con ${notaMayor}`);