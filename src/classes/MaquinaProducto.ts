import scanf from "scanf";
import { IOperaciones } from "../interface/IOperaciones";
import { IProducto } from "../models/IProducto";

export abstract class MaquinaProducto implements IOperaciones {
  productos: IProducto[];
  selectProducto: IProducto[];
  accesoProducto: IProducto;
  seleccion: string;
  cantidad: number;
  billete: number;

  constructor() {}

  busquedaProducto(productos: IProducto[]): IProducto[] {
    let bandera = true;
    console.log("Ingresa el nombre de un producto");
    let query = (this.seleccion = scanf("%s"));
    const find = productos.find((p) => {
      return p.name == query;
    });

    while (bandera) {
      if (find) {
        this.selectProducto = productos.filter((p) => {
          return p.name == query;
        });
        bandera = false;
      } else {
        console.log("El producto ingresado no se encuentra registrado");
        console.log("Ingresa nuevamente el nombre de un producto");

        query = this.seleccion = scanf("%s");
      }
    }
    return this.selectProducto;
  }

  compraProducto(): void {
    console.log("Ingrese el billete para la compra");
    let dinero = (this.billete = scanf("%d"));
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
      } else {
        console.log("Insuficiente fondo para obtener el producto");
        console.log("Ingresa nuevamente el billete para la compra");

        dinero = this.billete = scanf("%d");
      }
    }
  }

  cantidadProducto(): void {
    console.log("Ingrese la cantidad deseada");
    this.cantidad = scanf("%d");
    const verficarCantidad = this.accesoProducto.amount >= this.cantidad;
    let bandera = true;

    while (bandera) {
      if (verficarCantidad) {
        let newAmount = this.accesoProducto.amount - this.cantidad;
        this.accesoProducto.amount = newAmount;

        bandera = false;
      } else {
        console.log("No tenemos la cantidad del producto solicitado");
        console.log("Ingrese nuevamente la cantidad deseada");

        this.cantidad = scanf("%d");
      }
    }
  }
}
