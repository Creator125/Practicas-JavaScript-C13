/*
Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario
tiene 18 años o más, brinde comentarios: 'Tiene la edad suficiente para conducir',
pero si no tiene 18 años, brinda otro comentario que indique que debe esperar la
cantidad de años que necesita para cumplir 18.
*/

edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= 18) {
    console.log("Tiene la edad suficiente para conducir");
}else{
    console.log(`Te falta ${18 - edad} años para cumplir 18`)
}