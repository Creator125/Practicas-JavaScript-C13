//Definiendo la clase
class Factura{
    //Definiedo cosntructor
    constructor(numFactura, divisa, subtotal, iva){
        this.numFactura = numFactura;
        this.divisa = divisa;
        this.subtotal = subtotal;
        this.iva = iva;
    }

    //Definindo metodos
    get total(){ //Recuperar valores de subtotal y iva
        return this.subtotal + this.iva;
    }

    set nuevaDivisa(valor){ //Modificar la divisa
        this.divisa = valor;
    }

    aplicarDescuento(porcentaje){ //Metodo propio de la clase
        this.subtotal -= (this.subtotal / 100) * porcentaje;
    }
}

const factura1 = new Factura(101, "USD", 100, 19);
factura1.aplicarDescuento(10);
factura1.nuevaDivisa = "COP";
const factura2 = new Factura(102, "USD", 150, 15);

console.log(`la factura ${factura1.numFactura} está en divisa ${factura1.divisa} y tiene un total de ${factura1.total}`);
console.log(`la factura ${factura2.numFactura} está en divisa ${factura2.divisa} y tiene un total de ${factura2.total}`);