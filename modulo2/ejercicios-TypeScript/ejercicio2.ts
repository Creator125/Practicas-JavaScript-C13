/*
Crear una clase `Vehiculo` con propiedades `marca` y `modelo`. 
Luego, crear una clase `Coche` que herede de `Vehiculo` 
y tenga una propiedad adicional `numPuertas`. Instanciar 
un objeto de la clase `Coche` y mostrar sus propiedades.
*/

//Clase Vehículo
class Vehiculo{
    marca: string;
    modelo: string;

    constructor(marca: string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }
}

//Clases Coche
class Coche extends Vehiculo{
    numPuertas: number;

    constructor(marca: string, modelo: string, numPuertas: number){
        super(marca, modelo);
        this.numPuertas = numPuertas;
    }
}

// Instanciar un objeto de la clase Coche
const miCoche = new Coche("Toyota", "Camry", 4);

// Mostrar las propiedades del coche
console.log("Marca:", miCoche.marca);
console.log("Modelo:", miCoche.modelo);
console.log("Número de puertas:", miCoche.numPuertas);