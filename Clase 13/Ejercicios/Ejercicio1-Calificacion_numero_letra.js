/*
Crea un programa que tome una calificación numérica (por ejemplo, 0-5) como
entrada y muestre la calificación correspondiente en letras (A, B, C, etc.).
*/

let nota = parseFloat(prompt("Ingrese tu calificacion: "));

if(nota >= 4 && nota <= 5){
    alert("Calificacion: A");
}else if(nota >= 3 && nota < 4){
    alert("Calificacion: B");
}else if(nota >= 2 && nota < 3){
    alert("Calificacion: C");
}else if(nota >= 1 && nota < 2){
    alert("Calificacion: D");
}else if(nota >= 0 && nota < 1){
    alert("Calificacion: F");
}else{
    alert("Entrada invalida");
}