"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maquina_1 = require("./components/maquina");
const menu_1 = require("./components/menu");
const menu1 = new menu_1.Menu();
menu1.acciones();
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
