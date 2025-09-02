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

export class Torneo implements IIdentificable {
  private partidos: Partido[] = [];
  private estadisticas: Map<string, EstadisticasEquipo> = new Map();

  constructor(
    public readonly id: string,
    public nombre: string,
    public readonly deporte: Deporte
  ) {}

  inscribirEquipo(equipo: Equipo): void {
    if (!this.deporte.validar(equipo)) {
      throw new Error(
        `El equipo ${equipo.nombre} no cumple con las reglas del deporte`
      );
    }

    if (this.estadisticas.has(equipo.id)) {
      throw new Error(`El equipo ${equipo.nombre} ya está inscrito`);
    }

    if (this.estadisticas.size >= 6) {
      throw new Error("El torneo ya tiene 6 equipos inscritos");
    }

    this.estadisticas.set(equipo.id, {
      equipo,
      puntaje: 0,
      partidosJugados: 0,
      partidosGanados: 0,
      partidosEmpatados: 0,
      partidosPerdidos: 0,
    });
  }

  programarTodosPartidos(): void {
    const equipos: any = Array.from(this.estadisticas.values()).map(
      (e) => e.equipo
    );

    // Cada equipo juega contra todos los demás (todos contra todos)
    for (let i = 0; i < equipos.length; i++) {
      for (let j = i + 1; j < equipos.length; j++) {
        const partidoId = `partido-${this.partidos.length + 1}`;
        const partido = new Partido(
          partidoId,
          equipos[i],
          equipos[j],
          this.deporte
        );
        this.partidos.push(partido);
      }
    }
  }

  jugarPartido(partidoId: string): void {
    const partido = this.buscarPartido(partidoId);
    if (!partido) {
      throw new Error(`Partido ${partidoId} no encontrado`);
    }

    if (partido.jugado) {
      throw new Error(`El partido ${partidoId} ya fue jugado`);
    }

    partido.jugar();
    this.actualizarEstadisticas(partido);
  }

  private actualizarEstadisticas(partido: Partido): void {
    if (!partido.resultado) return;

    const statsLocal = this.estadisticas.get(partido.local.id);
    const statsVisitante = this.estadisticas.get(partido.visitante.id);

    if (!statsLocal || !statsVisitante) return;

    // Actualizar partidos jugados
    statsLocal.partidosJugados++;
    statsVisitante.partidosJugados++;

    // Actualizar según resultado
    if (partido.resultado.ganador === "local") {
      statsLocal.partidosGanados++;
      statsLocal.puntaje += 3;
      statsVisitante.partidosPerdidos++;
    } else if (partido.resultado.ganador === "visitante") {
      statsVisitante.partidosGanados++;
      statsVisitante.puntaje += 3;
      statsLocal.partidosPerdidos++;
    } else {
      statsLocal.partidosEmpatados++;
      statsLocal.puntaje += 1;
      statsVisitante.partidosEmpatados++;
      statsVisitante.puntaje += 1;
    }
  }

  jugarTodosPartidos(): void {
    this.partidos.forEach((partido) => {
      if (!partido.jugado) {
        try {
          this.jugarPartido(partido.id);
        } catch (error: any) {
          console.log(`Error al jugar partido ${partido.id}: ${error.message}`);
        }
      }
    });
  }

  obtenerClasificacion(): EstadisticasEquipo[] {
    return Array.from(this.estadisticas.values()).sort(
      (a, b) => b.puntaje - a.puntaje
    );
  }

  obtenerGanador(): Equipo | undefined {
    const clasificacion: any = this.obtenerClasificacion();
    return clasificacion.length > 0 ? clasificacion[0].equipo : undefined;
  }

  listarPartidos(): Partido[] {
    return [...this.partidos];
  }

  buscarPartido(id: string): Partido | undefined {
    return this.partidos.find((partido) => partido.id === id);
  }

  get equipos(): Equipo[] {
    return Array.from(this.estadisticas.values()).map((e) => e.equipo);
  }

  get cantidadEquipos(): number {
    return this.estadisticas.size;
  }

  toString(): string {
    return `${this.nombre} - ${this.deporte.nombre} - ${this.cantidadEquipos} equipos`;
  }
}
