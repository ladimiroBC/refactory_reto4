"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const MaquinaProducto_1 = require("../classes/MaquinaProducto");
class ProductoService extends MaquinaProducto_1.MaquinaProducto {
    constructor() {
        super();
        this.productos = [];
    }
    creacionProducto(productos) {
        this.productos.push(productos);
    }
    verProductos() {
        this.productos.forEach((producto) => console.log(producto));
    }
    seleccionarProducto() {
        this.busquedaProducto();
    }
    ingresarBillete() {
        this.compraProducto();
    }
}
exports.ProductoService = ProductoService;
