import { Equipo } from "./Equipo.js";

export abstract class Deporte {
  constructor(
    public readonly nombre: string,
    public readonly maxPorEquipo: number
  ) {}

  abstract validar(equipo: Equipo): boolean;

  validarConMensaje(equipo: Equipo): { valido: boolean; mensaje: string } {
    const valido = this.validar(equipo);
    const mensaje = valido
      ? `Válido`
      : `Inválido: ${equipo.cantidad} jugadores (máximo ${this.maxPorEquipo})`;

    return { valido, mensaje };
  }

  toString(): string {
    return `${this.nombre} (máx ${this.maxPorEquipo} jugadores por equipo)`;
  }
}
