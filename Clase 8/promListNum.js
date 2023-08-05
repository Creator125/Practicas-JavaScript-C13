/*
Cálculo del promedio de una lista de números. Dada una lista de 'n' 
números, debemos sumarlos y dividir la suma por 'n' para obtener el 
promedio.
*/

function obtenerListaNumeros() {
    let listaNumero = [];
    let numElementos = parseInt(prompt("Ingresar la cantidad de numeros a almacenar: "));

    for (let i = 0; i < numElementos; i++) {
        listaNumero.push(parseInt(prompt("Ingrese  un numero "))); 
    }

    return listaNumero;
}


function calcularSuma(listaNumero) {
    let suma = 0;
    
    for (let i = 0; i < listaNumero.length; i++) {
        suma += listaNumero[i]
    }
    
    //console.log(suma);
    return suma;
}

function calcularPromedio(listaNumero){
    const sumaTotal = calcularSuma(listaNumero);
    const prom = sumaTotal / listaNumero.length;

    return prom;
}

function result() {
    const listaLlena = obtenerListaNumeros();

    if(listaLlena.length != 0) {
        const promedioCalculado = calcularPromedio(listaLlena);
        console.log(promedioCalculado);
    }else{
        alert("La lista está vacia");
    }
}

result();