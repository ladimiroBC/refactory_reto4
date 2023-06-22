import { IProducto } from "../models/IProducto";

export interface IProductoService{
    creacionProducto(productos:IProducto):void;
    verProductos():void;
    seleccionarProducto():void;
    ingresarBillete():void;
}