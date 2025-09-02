import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
import { Resultado } from "./Resultado.js";
export declare class Partido implements IIdentificable {
    readonly id: string;
    readonly local: Equipo;
    readonly visitante: Equipo;
    readonly deporte: Deporte;
    private _resultado?;
    private _jugado;
    constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte);
    get resultado(): Resultado | undefined;
    get jugado(): boolean;
    private validarPartido;
    jugar(): void;
    toString(): string;
}
//# sourceMappingURL=Partido.d.ts.map