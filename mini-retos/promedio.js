let n = parseInt(prompt("Ingrese la cantidad de numeros a pedir: "));
let promedio = 0;
let numero;
let i = 1;

while (i <= n) {
    numero = parseInt(prompt("Ingrese un numero: "));
    promedio += numero;
    i++;
}

promedio /= n;

alert("Promedio = " + promedio);