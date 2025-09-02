import type { IIdentificable } from "../interfaces/IIdentificable.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";
import { Resultado } from "./Resultado.js";

export class Partido implements IIdentificable {
  private _resultado?: Resultado;
  private _jugado: boolean = false;

  constructor(
    public readonly id: string,
    public readonly local: Equipo,
    public readonly visitante: Equipo,
    public readonly deporte: Deporte
  ) {
    this.validarPartido();
  }

  get resultado(): Resultado | undefined {
    return this._resultado;
  }

  get jugado(): boolean {
    return this._jugado;
  }

  private validarPartido(): void {
    if (this.local.id === this.visitante.id) {
      throw new Error("El equipo local no puede ser el mismo que el visitante");
    }

    if (!this.deporte.validar(this.local)) {
      throw new Error(
        `El equipo local '${this.local.nombre}' no cumple con las reglas del ${this.deporte.nombre}. Máximo permitido: ${this.deporte.maxPorEquipo} jugadores`
      );
    }

    if (!this.deporte.validar(this.visitante)) {
      throw new Error(
        `El equipo visitante '${this.visitante.nombre}' no cumple con las reglas del ${this.deporte.nombre}. Máximo permitido: ${this.deporte.maxPorEquipo} jugadores`
      );
    }
  }

  jugar(): void {
    if (this._jugado) {
      throw new Error("El partido ya fue jugado");
    }

    this.validarPartido();

    const golesLocal = Math.floor(Math.random() * 5);
    const golesVisitante = Math.floor(Math.random() * 5);

    this._resultado = new Resultado(golesLocal, golesVisitante);
    this._jugado = true;
  }

  toString(): string {
    const resultadoStr = this._resultado
      ? `Resultado: ${this._resultado.toString()} - Ganador: ${
          this._resultado.ganador
        }`
      : "Partido no jugado";

    return `${this.local.nombre} vs ${this.visitante.nombre} - ${this.deporte.nombre}\n${resultadoStr}`;
  }
}
