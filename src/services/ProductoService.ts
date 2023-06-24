import { IProducto } from "../models/IProducto";
import { IProductoService } from "../interface/IProductoService";
import { MaquinaProducto } from "../classes/MaquinaProducto";

export class ProductoService extends MaquinaProducto implements IProductoService
{
  constructor() {
    super();
    this.productos = [];
  }

  creacionProducto(productos: IProducto): void {
    this.productos.push(productos);
  }

  verProductos(): void {
    this.productos.forEach((producto) => console.log(producto));
  }

  seleccionarProducto(): void {
    this.busquedaProducto();
  }

  ingresarBillete(): void {
    this.compraProducto();
  }
}
