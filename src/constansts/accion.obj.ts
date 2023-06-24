import scanf from "scanf";
import { Maquina } from "../components/maquina"

const accion:Maquina = Maquina.Instance;
accion.verProducto()



/*
type action = {
    instruccion:string;
}

class Accion{
    public instruccion:string;
    constructor(user:action){
        this.instruccion = user.instruccion;
    }
}

const sendAction = (user:action)=>{
    const actionHandler = {
        1: ()=>"Estamos viendo productos",
        2: ()=>"Estamos seleccionado un producto",
        3: ()=>"Estamos ingresando el dinero",
        4: ()=>"Estamos saliendo de la aplicacion"
    }

    const handler = actionHandler[user.instruccion];
    handler(user);
}

const user = new Accion({
    instruccion:'1'
});

sendAction(user);
*/






const verCatalogo = ()=>accion.verProducto();
const seleccionarProducto = ()=>"Estamos seleccionado un producto";
const ingresarBillete = ()=>"Estamos ingresando el dinero";
const salir = ()=>"Estamos saliendo de la aplicacion";

//console.log("Ingresa la accion a realizar");
//const query = scanf("%d");
//typeof(query);
const funcion = 1;

const accionesMaquina = {
    1:verCatalogo,
    2:seleccionarProducto,
    3:ingresarBillete,
    4:salir
}

const funcionError = "No se encuentra la accion a realizar";
const seleccionFuncion = accionesMaquina[funcion] || funcionError;
console.log(seleccionFuncion())

