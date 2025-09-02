import type { IIdentificable } from "../interfaces/IIdentificable.js";
export declare class Jugador implements IIdentificable {
    readonly id: string;
    nombre: string;
    edad: number;
    posicion?: string | undefined;
    constructor(id: string, nombre: string, edad: number, posicion?: string | undefined);
    toString(): string;
}
//# sourceMappingURL=Jugador.d.ts.map