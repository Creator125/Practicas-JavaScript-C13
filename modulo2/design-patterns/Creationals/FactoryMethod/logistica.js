var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase concreta de producto (Camión)
var Camion = /** @class */ (function () {
    function Camion() {
    }
    Camion.prototype.entrega = function () {
        console.log("Entrega por tierra");
    };
    return Camion;
}());
// Clase concreta de producto (Barco)
var Barco = /** @class */ (function () {
    function Barco() {
    }
    Barco.prototype.entrega = function () {
        console.log("Entrega por mar");
    };
    return Barco;
}());
var Avion = /** @class */ (function () {
    function Avion() {
    }
    Avion.prototype.entrega = function () {
        console.log("Entrega por arie");
    };
    return Avion;
}());
// Clase creadora abstracta
var Logistica = /** @class */ (function () {
    function Logistica() {
    }
    // Método cliente que utiliza el producto creado por el método fábrica
    Logistica.prototype.planificarEntrega = function () {
        var transporte = this.crearTransporte();
        console.log("Planificando entrega...");
        transporte.entrega();
    };
    return Logistica;
}());
// Clase creadora concreta para logística terrestre
var LogisticaTerrestre = /** @class */ (function (_super) {
    __extends(LogisticaTerrestre, _super);
    function LogisticaTerrestre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementación del método fábrica
    LogisticaTerrestre.prototype.crearTransporte = function () {
        return new Camion();
    };
    return LogisticaTerrestre;
}(Logistica));
// Clase creadora concreta para logística marítima
var LogisticaMaritima = /** @class */ (function (_super) {
    __extends(LogisticaMaritima, _super);
    function LogisticaMaritima() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementación del método fábrica
    LogisticaMaritima.prototype.crearTransporte = function () {
        return new Barco();
    };
    return LogisticaMaritima;
}(Logistica));
var LogisticaAerea = /** @class */ (function (_super) {
    __extends(LogisticaAerea, _super);
    function LogisticaAerea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogisticaAerea.prototype.crearTransporte = function () {
        return new Avion();
    };
    return LogisticaAerea;
}(Logistica));
// Ejemplo de uso
var logisticaTerrestre = new LogisticaTerrestre();
logisticaTerrestre.planificarEntrega();
var logisticaMaritima = new LogisticaMaritima();
logisticaMaritima.planificarEntrega();
var logisticaAerea = new LogisticaAerea();
logisticaAerea.planificarEntrega();
