import { IProducto } from "../models/IProducto";

export interface IOperaciones{
    busquedaProducto(productos:IProducto[]):IProducto[];
    compraProducto():void;
    cantidadProducto():void;
}