/*
Consulta si la estación del año es Otoño, Invierno, Primavera o Verano. Si la entrada
del usuario es:

Septiembre, octubre o noviembre, la temporada es otoño.

Diciembre, enero o febrero, la temporada es invierno.

Marzo, Abril o Mayo, la temporada es Primavera

Junio, Julio o Agosto, la temporada es Verano
*/

let mes = prompt("Ingrese el nombre del mes: ").toLocaleLowerCase();

switch (mes) {
    case "septiembre":
    case "octubre":
    case "noviembre":
        alert("La temporada es otoño");
        break;
    case "diciembre":
    case "enero":
    case "febrero":
        alert("La temporada es invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        alert("La temporada es primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        alert("La temporada es verano");
        break;

    default:
        alert("Ese mes no existe")
        break;
}

/*
if(mes == "septiembre" || mes == "octubre" || mes == "noviembre"){
    alert("La temporada es otoño");
}else if(mes == "diciembre" || mes == "enero" || mes == "febrero"){
    alert("La temporada es invierno");
}else if(mes == "marzo" || mes == "abril" || mes == "mayo"){
    alert("La temporada es primavera");
}else if(mes == "junio" || mes == "julio" || mes == "agosto"){
    alert("La temporada es verano");
}else{
    alert("Ese mes no existe")
}*/