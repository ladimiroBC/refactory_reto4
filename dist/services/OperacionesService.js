"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacionesService = void 0;
const scanf_1 = __importDefault(require("scanf"));
class OperacionesService {
    constructor(maquina) {
        this.maquina = maquina;
    }
    ;
    busquedaProducto(productos) {
        let bandera = true;
        console.log("Ingresa el nombre de un producto");
        let query = (this.maquina.seleccion = (0, scanf_1.default)('%s'));
        const find = productos.find((p) => {
            return p.name == query;
        });
        while (bandera) {
            if (find) {
                this.maquina.selectProducto = productos.filter((p) => {
                    return p.name == query;
                });
                bandera = false;
            }
            else {
                console.log("El producto ingresado no se encuentra registrado");
                console.log("Ingresa el nombre de un producto");
                query = this.maquina.seleccion = (0, scanf_1.default)("%s");
            }
        }
        return this.maquina.selectProducto;
    }
    compraProducto() {
        console.log("Ingrese el billete para la compra");
        let dinero = (this.maquina.billete = (0, scanf_1.default)('%d'));
        let total = (this.maquina.accesoProducto.price * this.maquina.cantidad);
        this.maquina.accesoProducto = this.maquina.selectProducto[0];
        let bandera = true;
        while (bandera) {
            this.cantidadProducto();
            if (total <= dinero) {
                let devolucion = dinero - this.maquina.accesoProducto.price;
                console.log("***Venta Existosa***");
                console.log(`Producto ${this.maquina.accesoProducto.name} vendidad`);
                console.log(`Cantidad vendida ${this.maquina.cantidad}`);
                console.log(`Devolución ${devolucion}`);
                bandera = false;
            }
            else {
                console.log("Insuficiente fondo para obtener el producto");
                console.log("Ingresa nuevamente el billete para la compra");
                dinero = (this.maquina.billete = (0, scanf_1.default)('%d'));
            }
        }
    }
    cantidadProducto() {
        console.log("Ingrese la cantidad deseada");
        this.maquina.cantidad = (0, scanf_1.default)('%d');
        const verficarCantidad = this.maquina.accesoProducto.amount >= this.maquina.cantidad;
        let bandera = true;
        while (bandera) {
            if (verficarCantidad) {
                let newAmount = this.maquina.accesoProducto.amount - this.maquina.cantidad;
                this.maquina.accesoProducto.amount = newAmount;
                bandera = false;
            }
            else {
                console.log("No tenemos la cantidad del producto solicitado");
                console.log("Ingrese nuevamente la cantidad deseada");
                this.maquina.cantidad = (0, scanf_1.default)('%d');
            }
        }
    }
}
exports.OperacionesService = OperacionesService;
