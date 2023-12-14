//Realiza el algoritmo para encontrar el área de un cuadrado.

function obtenerArea(){
    let lado = parseInt(prompt("Ingrese el lado del cuadrado"));
    let area = lado * lado;
    return area;
}

function mostraArea(){
    const areaCuadrado = obtenerArea();
    console.log("Area del caudrado: ", areaCuadrado);
}

mostraArea();