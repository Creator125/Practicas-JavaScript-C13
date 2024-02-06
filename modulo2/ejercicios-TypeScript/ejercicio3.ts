/*
Definir una enumeración `DiasSemana` con los días de la semana. 
Escribir una función `obtenerDiaLaboral` que tome un parámetro 
de tipo `DiasSemana` y devuelva un mensaje indicando si es un 
día laboral o no. Invocar la función con diferentes valores 
de la enumeración.
*/

enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

function obtenerDiaLaboral(Dia: number) {
    if (Dia >= 1 && Dia <= 5) {
        console.log(`Es un día laboral: ${DiasSemana[Dia - 1]}`);
    } else {
        console.log(`No es un día laboral: ${DiasSemana[Dia]}`);
    }
}

// Ejemplo de uso
obtenerDiaLaboral(DiasSemana.Lunes);
obtenerDiaLaboral(DiasSemana.Sabado);
