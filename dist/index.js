"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maquina_1 = require("./components/maquina");
const menu_1 = require("./components/menu");
const menu1 = new menu_1.Menu();
menu1.imprimirMenu();
const producto1 = maquina_1.Maquina.Instance;
producto1.creacionProducto({
    name: "sprite",
    price: 300,
    amount: 4,
});
producto1.creacionProducto({
    name: "margarita",
    price: 400,
    amount: 2,
});
producto1.creacionProducto({
    name: "doritos",
    price: 500,
    amount: 6,
});
producto1.creacionProducto({
    name: "pepsi",
    price: 400,
    amount: 7,
});
let bandera = "si";
while (bandera === "si") {
    producto1.verProducto();
    producto1.seleccionProducto();
    producto1.ingresarBillete();
    let instruccion = producto1.salir();
    bandera = instruccion;
}
console.log("Gracias por utilizar nuestra maquina, vuelva pronto");
/*
console.log("Ingresa la accion a realizar");
const query = scanf("%s");
let funcion:string;


const funciones = {
    '1':function():void{producto1.verProducto()},
    '2':function():void{producto1.seleccionProducto()},
    '3':function():void{producto1.ingresarBillete()},
    
}

const funcionError = "No se encuentra la accion a realizar";
const seleccionFuncion = funciones[funcion] || funcionError;
console.log(seleccionFuncion)
*/
/*
function verCatalogo():string{
  return "Estamos viendo los productos";
}

function seleccionarProducto():string{
  return "Estamos seleccionado un producto";
}

function ingresarDinero():string{
  return "Estamos ingresando el dinero";
}

function salir():string{
  return "Estamos saliendo de la app";
}
*/
/*
const verCatalogo = function ():string{
  return "Estamos viendo los productos";
}

const seleccionarProducto = function ():string{
  return "Estamos seleccionado un producto";
}

const ingresarDinero = function ():string{
  return "Estamos ingresando el dinero";
}

const salir = function ():string{
  return "Estamos saliendo de la app";
}
*/
//console.log("Ingresa la accion a realizar");
//const query = scanf("%d");
//console.log(typeof(query));
/*

const verCatalogo = ()=>"ver productos";
const seleccionarProducto = ()=>"seleccionar producto";
const ingresarDinero = ()=>"ingresando dinero";
const salir = ()=>"salir";

const accionesMaquina:{[key:number]:()=>string} = {
  1:verCatalogo,
  2:seleccionarProducto,
  3:ingresarDinero,
  4:salir
}

console.log("Ingresa la accion a realizar");
const query = scanf("%d");
console.log(typeof(query));
const funcion = query;

const funcionError = "No se encuentra la accion a realizar";
const seleccionFuncion = accionesMaquina[funcion] || funcionError;
console.log(seleccionFuncion());

*/
/*
const accionesMaquina2 = {
  1:verCatalogo,
  2:seleccionarProducto,
  3:ingresarDinero,
  4:salir
}
*/
/*
const accion:Maquina = Maquina.Instance;

accion.creacionProducto({
  name: "sprite",
  price: 300,
  amount: 4,
});
accion.creacionProducto({
  name: "margarita",
  price: 400,
  amount: 2,
});
accion.creacionProducto({
  name: "doritos",
  price: 500,
  amount: 6,
});
accion.creacionProducto({
  name: "pepsi",
  price: 400,
  amount: 7,
});


const verCatalogo = ()=>accion.verProducto();
const seleccionarProducto = ()=>accion.seleccionProducto();
const ingresarBillete = ()=>accion.ingresarBillete();
const salir = ()=>"Estamos saliendo de la aplicacion";

//console.log("Ingresa la accion a realizar");
//const query = scanf("%d");
//typeof(query);
const funcion = 2;

const accionesMaquina = {
    1:verCatalogo,
    2:seleccionarProducto,
    3:ingresarBillete,
    4:salir
}

const funcionError = "No se encuentra la accion a realizar";
const seleccionFuncion = accionesMaquina[funcion] || funcionError;
seleccionFuncion();
*/ 
