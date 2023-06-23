"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var MENU;
(function (MENU) {
    MENU["BIENVENIDO"] = "***BIENVENIDO A NUESTRA MAQUINA DE PRODUCTOS***";
    MENU["PREGUNTA"] = "\u00BFQue accion desea realizar?";
    MENU["ACCION_1"] = "1. Ver el catalogo de productos";
    MENU["ACCION_2"] = "2. Seleccionar el producto";
    MENU["ACCION_3"] = "3. Ingresar dinero";
    MENU["ACCION_4"] = "4. Salir";
})(MENU || (MENU = {}));
class Menu {
    constructor() { }
    acciones() {
        function enumKeys(obj) {
            return Object.keys(obj).filter((k) => Number.isNaN(+k));
        }
        function imprimir(value) {
            console.log(`${value}`);
        }
        for (const value of enumKeys(MENU)) {
            imprimir(MENU[value]);
        }
    }
}
exports.Menu = Menu;
