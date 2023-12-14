/*
Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
considerando que realiza tres exámenes, de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero de 50%.
*/

function ObtenerCalificaciones(){
    let examen1 = parseFloat(prompt("Ingrese la calificacion del examen 1: "));
    let examen2 = parseFloat(prompt("Ingrese la calificacion del examen 2: "));
    let examen3 = parseFloat(prompt("Ingrese la calificacion del examen 3: "));
    let sumatoria = (examen1 * 0.25) + (examen2 * 0.25) + (examen3 * 0.50);
    return sumatoria;
}

function calcularPromedio(sumatoria){
    let promedio = sumatoria / 3;
    return promedio;
}

function promedio(){
    const calificacionesSumadas = ObtenerCalificaciones();
    const promedioCalculado = calcularPromedio(calificacionesSumadas);

    console.log("Promedio del alumno: ", promedioCalculado);
}

promedio();