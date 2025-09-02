import { Jugador } from "./Jugador.js";
export class Equipo {
    id;
    nombre;
    jugadores = [];
    jugadoresIds = new Set();
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    agregarJugador(jugador) {
        if (this.jugadoresIds.has(jugador.id)) {
            throw new Error(`El jugador ${jugador.nombre} (ID: ${jugador.id}) ya está en el equipo`);
        }
        this.jugadores.push(jugador);
        this.jugadoresIds.add(jugador.id);
    }
    listarIntegrantes() {
        return this.jugadores.map((jugador) => jugador.toString());
    }
    get cantidad() {
        return this.jugadores.length;
    }
    tieneJugador(jugadorId) {
        return this.jugadoresIds.has(jugadorId);
    }
    toString() {
        return `${this.nombre} - ${this.cantidad} jugadores`;
    }
}
//# sourceMappingURL=Equipo.js.map