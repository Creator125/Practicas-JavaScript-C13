/* Declarar un array de números llamado `edades` con
al menos cinco elementos. Escribir una función 
`calcularPromedio` que tome un array de números como 
parámetro y devuelva su promedio. Luego, invocar la 
función con el array `edades` y mostrar el resultado.
*/

let edades: number[] = [12, 6, 7, 10, 5];

function calcularPromedio(numeros: number[]): number {
    const suma = numeros.reduce((total, num) => total + num, 0);
    const promedio = suma / numeros.length;
    return promedio;
}

const resultado = calcularPromedio(edades);
console.log("El promedio de edades es:", resultado);