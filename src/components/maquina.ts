import scanf from "scanf";
import { IProducto } from "../models/IProducto";
import { ProductoService } from "../services/ProductoService";

export class Maquina {
  private static instance: Maquina;

  constructor(private productoSVC: ProductoService) {}

  public static get Instance() {
    let producto: ProductoService = new ProductoService();
    return this.instance || (this.instance = new this(producto));
  }

  creacionProducto(productos: IProducto) {
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

  salir(): string {
    let instruccion: string;

    console.log(
      "Quiere seguir en nuestra aplicacion, digite 'si' para continuar, 'no' para salir"
    );
    instruccion = scanf("%s");

    return instruccion;
  }
}
