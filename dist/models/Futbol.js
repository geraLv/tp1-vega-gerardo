import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";
export class Futbol extends Deporte {
    constructor() {
        super("Fútbol", 11);
    }
    validar(equipo) {
        return equipo.cantidad <= this.maxPorEquipo;
    }
}
//# sourceMappingURL=Futbol.js.map