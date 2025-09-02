import type { ICompetidor } from "../interfaces/ICompetidor.js";
import { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  private jugadores: Jugador[] = [];
  private jugadoresIds: Set<string> = new Set();

  constructor(public readonly id: string, public nombre: string) {}

  agregarJugador(jugador: Jugador): void {
    if (this.jugadoresIds.has(jugador.id)) {
      throw new Error(
        `El jugador ${jugador.nombre} (ID: ${jugador.id}) ya está en el equipo`
      );
    }

    this.jugadores.push(jugador);
    this.jugadoresIds.add(jugador.id);
  }

  listarIntegrantes(): string[] {
    return this.jugadores.map((jugador) => jugador.toString());
  }

  get cantidad(): number {
    return this.jugadores.length;
  }

  tieneJugador(jugadorId: string): boolean {
    return this.jugadoresIds.has(jugadorId);
  }

  toString(): string {
    return `${this.nombre} - ${this.cantidad} jugadores`;
  }
}
