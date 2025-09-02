import type { ICompetidor } from "../interfaces/ICompetidor.js";
import { Jugador } from "./Jugador.js";
export declare class Equipo implements ICompetidor {
    readonly id: string;
    nombre: string;
    private jugadores;
    private jugadoresIds;
    constructor(id: string, nombre: string);
    agregarJugador(jugador: Jugador): void;
    listarIntegrantes(): string[];
    get cantidad(): number;
    tieneJugador(jugadorId: string): boolean;
    toString(): string;
}
//# sourceMappingURL=Equipo.d.ts.map