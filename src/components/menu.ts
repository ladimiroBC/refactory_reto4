enum MENU {
  BIENVENIDO = "***BIENVENIDO A NUESTRA MAQUINA DE PRODUCTOS***",
  PREGUNTA = "¿Que accion desea realizar?",
  ACCION_1 = "1. Ver el catalogo de productos",
  ACCION_2 = "2. Seleccionar el producto",
  ACCION_3 = "3. Ingresar dinero",
  ACCION_4 = "4. Salir",
}

export class Menu {
  
  constructor(){}
  
  public acciones(): void {
    function enumKeys<O extends object, K extends keyof O = keyof O>(
      obj: O
    ): K[] {
      return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
    }
    function imprimir(value: MENU) {
      console.log(`${value}`);
    }
    for (const value of enumKeys(MENU)) {
      imprimir(MENU[value]);
    }
  }
}
