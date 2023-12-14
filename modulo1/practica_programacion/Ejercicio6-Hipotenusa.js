/*
Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo
sería el algoritmo para obtenerla? Recuerda que por Pitágoras se tiene que:
La hipotenusa al cuadrado es igual a la suma de los otros dos lados al
cuadrado (H2 = A2 + B2)
*/

function hallarHipotenusa(){
    let a = parseInt(prompt("Ingrese el cateto a"));
    let b = parseInt(prompt("Ingrese el cateto b"));
    let h = (a**2) + (b**2);
    return h;
} 

function imprimirHipontenusa(){
    let hipotenusa = hallarHipotenusa();

    console.log("La hipotenusa del triangualo rectagulo es: ", hipotenusa);
}

imprimirHipontenusa();