import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Partido } from "./Partido.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
interface EstadisticasEquipo {
    equipo: Equipo;
    puntaje: number;
    partidosJugados: number;
    partidosGanados: number;
    partidosEmpatados: number;
    partidosPerdidos: number;
}
export declare class Torneo implements IIdentificable {
    readonly id: string;
    nombre: string;
    readonly deporte: Deporte;
    private partidos;
    private estadisticas;
    constructor(id: string, nombre: string, deporte: Deporte);
    inscribirEquipo(equipo: Equipo): void;
    programarTodosPartidos(): void;
    jugarPartido(partidoId: string): void;
    private actualizarEstadisticas;
    jugarTodosPartidos(): void;
    obtenerClasificacion(): EstadisticasEquipo[];
    obtenerGanador(): Equipo | undefined;
    listarPartidos(): Partido[];
    buscarPartido(id: string): Partido | undefined;
    get equipos(): Equipo[];
    get cantidadEquipos(): number;
    toString(): string;
}
export {};
//# sourceMappingURL=Torneo.d.ts.map