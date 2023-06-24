"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
class Menu {
    imprimirMenu() {
        this.enumValues = Object.values(Menu);
        this.enumValues.forEach((value) => {
            console.log(value);
        });
    }
}
exports.Menu = Menu;
