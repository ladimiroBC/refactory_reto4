import { IProducto } from "../models/IProducto";

export interface IOperaciones{
    busquedaProducto():void;
    compraProducto():void;
    cantidadProducto():void;
}