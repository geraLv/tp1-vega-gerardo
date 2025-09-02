import { Equipo } from "./Equipo.js";
export declare abstract class Deporte {
    readonly nombre: string;
    readonly maxPorEquipo: number;
    constructor(nombre: string, maxPorEquipo: number);
    abstract validar(equipo: Equipo): boolean;
    validarConMensaje(equipo: Equipo): {
        valido: boolean;
        mensaje: string;
    };
    toString(): string;
}
//# sourceMappingURL=Deporte.d.ts.map