//Escribe en JavaScript, el algoritmo obtenga el área de un triángulo.

function ingresarLados() { //Ingresar la base y altura deltriangulo
    base = parseInt(prompt("Ingrese la base del triangulo: "));
    altura = parseInt(prompt("Ingrese la altura del triangulo: "));

    return base, altura;
}

function areaTriangulo(base, altura){ //Hallar el area
    let area = (base * altura) / 2;

    return area;
}

function ImprimirResul(){ //Enfocado a imprimir la base del triangulo
    ingresarLados();

    console.log("Base: ",base);
    console.log("Altura: ",altura);

    let area = areaTriangulo(base, altura);

    console.log("Area del triangulo: ",area);
}

ImprimirResul();
