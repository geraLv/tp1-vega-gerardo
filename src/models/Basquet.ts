import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";

export class Basquet extends Deporte {
  constructor() {
    super("Básquetbol", 5);
  }

  validar(equipo: Equipo): boolean {
    return equipo.cantidad <= this.maxPorEquipo;
  }
}
