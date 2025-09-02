export class Jugador {
    id;
    nombre;
    edad;
    posicion;
    constructor(id, nombre, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }
    toString() {
        return `${this.nombre} (${this.edad} años)${this.posicion ? ` - ${this.posicion}` : ""}`;
    }
}
//# sourceMappingURL=Jugador.js.map