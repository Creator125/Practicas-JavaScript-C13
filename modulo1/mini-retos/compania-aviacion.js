let cantidadBoletos;
let totalBoletas = 200;
let cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0, cont6 = 0;

do {
    console.log("(1) Medellín - Miami");
    console.log("(2) Medellín - Bogotá - Roma");
    console.log("(3) Medellín - Panamá - Los Ángeles");
    console.log("(4) Medellín - Bogotá - Madrid");
    console.log("(5) Medellín - Miami - Toronto");
    console.log("(6) Medellín - Buenos Aires")
    
    let opcion = parseInt(prompt("Seleccione el número de la ruta que desea tomar"));
    
    switch (opcion) {
        case 1:
            cantidadBoletos = parseInt(prompt("¿Cuántos tiquetes desea comprar para esta ruta? "));
    
            if (cantidadBoletos <= totalBoletas) {
                totalBoletas -= cantidadBoletos;
                cont1 += cantidadBoletos;
            } else {
                console.log("Excediste la cantidad de tiquetes disponibles");
            }
            break;
        case 2:
            cantidadBoletos = parseInt(prompt("¿Cuántos tiquetes desea comprar para esta ruta? "));
    
            if (cantidadBoletos <= totalBoletas) {
                totalBoletas -= cantidadBoletos;
                cont2 += cantidadBoletos;
            } else {
                console.log("Excediste la cantidad de tiquetes disponibles");
            }
            break;
        case 3:
            cantidadBoletos = parseInt(prompt("¿Cuántos tiquetes desea comprar para esta ruta? "));
    
            if (cantidadBoletos <= totalBoletas) {
                totalBoletas -= cantidadBoletos;
                cont3 += cantidadBoletos;
            } else {
                console.log("Excediste la cantidad de tiquetes disponibles");
            }
            break;
        case 4:
            cantidadBoletos = parseInt(prompt("¿Cuántos tiquetes desea comprar para esta ruta? "));
    
            if (cantidadBoletos <= totalBoletas) {
                totalBoletas -= cantidadBoletos;
                cont4 += cantidadBoletos;
            } else {
                console.log("Excediste la cantidad de tiquetes disponibles");
            }
            break;
        case 5:
            cantidadBoletos = parseInt(prompt("¿Cuántos tiquetes desea comprar para esta ruta? "));
    
            if (cantidadBoletos <= totalBoletas) {
                totalBoletas -= cantidadBoletos;
                cont5 += cantidadBoletos;
            } else {
                console.log("Excediste la cantidad de tiquetes disponibles");
            }
            break;
        case 6:
            cantidadBoletos = parseInt(prompt("¿Cuántos tiquetes desea comprar para esta ruta? "));
    
            if (cantidadBoletos <= totalBoletas) {
                totalBoletas -= cantidadBoletos;
                cont6 += cantidadBoletos;
            } else {
                console.log("Excediste la cantidad de tiquetes disponibles");
            }
            break;
    
        default:
            console.log("Opción no disponible");
            break;
    }
} while (totalBoletas > 0);

console.log(`Resumen de tiquetes vendidos:`);
console.log(`Ruta 1: ${cont1} tiquetes`);
console.log(`Ruta 2: ${cont2} tiquetes`);
console.log(`Ruta 3: ${cont3} tiquetes`);
console.log(`Ruta 4: ${cont4} tiquetes`);
console.log(`Ruta 5: ${cont5} tiquetes`);
console.log(`Ruta 6: ${cont6} tiquetes`);
console.log(`Tiquetes restantes: ${totalBoletas}`);