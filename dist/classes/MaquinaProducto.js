"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaquinaProducto = void 0;
const scanf_1 = __importDefault(require("scanf"));
class MaquinaProducto {
    constructor() { }
    busquedaProducto(productos) {
        let bandera = true;
        console.log("Ingresa el nombre de un producto");
        let query = (this.seleccion = (0, scanf_1.default)("%s"));
        const find = productos.find((p) => {
            return p.name == query;
        });
        while (bandera) {
            if (find) {
                this.selectProducto = productos.filter((p) => {
                    return p.name == query;
                });
                bandera = false;
            }
            else {
                console.log("El producto ingresado no se encuentra registrado");
                console.log("Ingresa nuevamente el nombre de un producto");
                query = this.seleccion = (0, scanf_1.default)("%s");
            }
        }
        return this.selectProducto;
    }
    compraProducto() {
        console.log("Ingrese el billete para la compra");
        let dinero = (this.billete = (0, scanf_1.default)("%d"));
        this.accesoProducto = this.selectProducto[0];
        let bandera = true;
        while (bandera) {
            this.cantidadProducto();
            let total = this.accesoProducto.price * this.cantidad;
            if (total <= dinero) {
                let devolucion = dinero - this.accesoProducto.price;
                console.log("***Venta Existosa***");
                console.log(`Producto ${this.accesoProducto.name} vendido`);
                console.log(`Cantidad vendida ${this.cantidad}`);
                console.log(`Devolución ${devolucion}`);
                bandera = false;
            }
            else {
                console.log("Insuficiente fondo para obtener el producto");
                console.log("Ingresa nuevamente el billete para la compra");
                dinero = this.billete = (0, scanf_1.default)("%d");
            }
        }
    }
    cantidadProducto() {
        console.log("Ingrese la cantidad deseada");
        this.cantidad = (0, scanf_1.default)("%d");
        const verficarCantidad = this.accesoProducto.amount >= this.cantidad;
        let bandera = true;
        while (bandera) {
            if (verficarCantidad) {
                let newAmount = this.accesoProducto.amount - this.cantidad;
                this.accesoProducto.amount = newAmount;
                bandera = false;
            }
            else {
                console.log("No tenemos la cantidad del producto solicitado");
                console.log("Ingrese nuevamente la cantidad deseada");
                this.cantidad = (0, scanf_1.default)("%d");
            }
        }
    }
}
exports.MaquinaProducto = MaquinaProducto;
