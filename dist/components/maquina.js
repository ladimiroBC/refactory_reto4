"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maquina = void 0;
const scanf_1 = __importDefault(require("scanf"));
const ProductoService_1 = require("../services/ProductoService");
class Maquina {
    constructor(productoSVC) {
        this.productoSVC = productoSVC;
    }
    static get Instance() {
        let producto = new ProductoService_1.ProductoService();
        return this.instance || (this.instance = new this(producto));
    }
    creacionProducto(productos) {
        this.productoSVC.creacionProducto(productos);
    }
    verProducto() {
        this.productoSVC.verProductos();
    }
    seleccionProducto() {
        this.productoSVC.seleccionarProducto();
    }
    ingresarBillete() {
        this.productoSVC.ingresarBillete();
    }
    salir() {
        let instruccion;
        console.log("Quiere seguir en nuestra aplicacion, digite 'si' para continuar, 'no' para salir");
        instruccion = (0, scanf_1.default)("%s");
        return instruccion;
    }
}
exports.Maquina = Maquina;
