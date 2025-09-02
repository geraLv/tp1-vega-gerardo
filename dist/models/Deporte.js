import { Equipo } from "./Equipo.js";
export class Deporte {
    nombre;
    maxPorEquipo;
    constructor(nombre, maxPorEquipo) {
        this.nombre = nombre;
        this.maxPorEquipo = maxPorEquipo;
    }
    validarConMensaje(equipo) {
        const valido = this.validar(equipo);
        const mensaje = valido
            ? `Válido`
            : `Inválido: ${equipo.cantidad} jugadores (máximo ${this.maxPorEquipo})`;
        return { valido, mensaje };
    }
    toString() {
        return `${this.nombre} (máx ${this.maxPorEquipo} jugadores por equipo)`;
    }
}
//# sourceMappingURL=Deporte.js.map