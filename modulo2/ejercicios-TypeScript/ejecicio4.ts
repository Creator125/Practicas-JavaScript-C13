/*
Crear un objeto `persona` con propiedades `nombre` y `edad`. 
Agregar un método llamado `presentarse` que muestre en consola 
un mensaje como "Hola, soy [nombre] y tengo [edad] años". 
Invocar el método desde el objeto.
*/

// Definición del tipo persona
type Persona = {
    nombre: string;
    edad: number;
    cedula: string;
    
    // Método presentarse
    presentarse: () => void;
};

// Implementación del tipo Persona
const miPersona: Persona = {
    nombre: "Obed",
    edad: 22,
    cedula: "1483930388",

    presentarse: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};

// Invocar el método presentarse
miPersona.presentarse();