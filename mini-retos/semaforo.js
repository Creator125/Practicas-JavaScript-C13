let color = prompt("Ingrese un color (rojo o verde): ").toLocaleLowerCase();

if(color === "rojo"){
    alert("Detenerse");
}else if(color === "verde"){
    alert("Avanzar");
}else{
    alert("Debes ingrear Rojo o Verde, por favor intente de nuevo");
}