import { Jugador } from "./models/Jugador.js";
import { Equipo } from "./models/Equipo.js";
import { Futbol } from "./models/Futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Torneo } from "./models/Torneo.js";
import { Partido } from "./models/Partido.js";

const futbol = new Futbol();
const basquet = new Basquet();

function crearEquiposConJugadores(cantidad: number, deporte: string): Equipo[] {
  const equipos: Equipo[] = [];
  let jugadorId = 1;

  for (let i = 1; i <= cantidad; i++) {
    const equipo = new Equipo(`e${i}`, `${deporte} Team ${i}`);
    const jugadoresPorEquipo = deporte === "Fútbol" ? 11 : 5;

    for (let j = 0; j < jugadoresPorEquipo; j++) {
      const jugador = new Jugador(
        `j${jugadorId++}`,
        `Jugador ${jugadorId}`,
        Math.floor(Math.random() * 15) + 18,
        deporte === "Fútbol"
          ? ["Delantero", "Mediocampista", "Defensor", "Portero"][j % 4]
          : ["Base", "Escolta", "Alero", "Ala-Pívot", "Pívot"][j % 5]
      );
      equipo.agregarJugador(jugador);
    }
    equipos.push(equipo);
  }

  return equipos;
}

const torneoFutbol = new Torneo("t1", "Liga de Fútbol 2024", futbol);
const torneoBasquet = new Torneo("t2", "Liga de Básquet 2024", basquet);

console.log("=== CREACIÓN DE TORNEOS ===\n");

const equiposFutbol = crearEquiposConJugadores(6, "Fútbol");
equiposFutbol.forEach((equipo) => {
  try {
    torneoFutbol.inscribirEquipo(equipo);
    console.log(` ${equipo.nombre} inscrito en fútbol`);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";
    console.log(
      ` Error al inscribir ${equipo.nombre} en fútbol: ${errorMessage}`
    );
  }
});

const equiposBasquet = crearEquiposConJugadores(6, "Básquet");
equiposBasquet.forEach((equipo) => {
  try {
    torneoBasquet.inscribirEquipo(equipo);
    console.log(` ${equipo.nombre} inscrito en básquet`);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";
    console.log(
      ` Error al inscribir ${equipo.nombre} en básquet: ${errorMessage}`
    );
  }
});

try {
  torneoFutbol.programarTodosPartidos();
} catch (error: unknown) {
  const errorMessage =
    error instanceof Error ? error.message : "Error desconocido";
  console.log(` Error programando partidos de fútbol: ${errorMessage}`);
}

try {
  torneoBasquet.programarTodosPartidos();
} catch (error: unknown) {
  const errorMessage =
    error instanceof Error ? error.message : "Error desconocido";
  console.log(` Error programando partidos de básquet: ${errorMessage}`);
}

try {
  torneoFutbol.jugarTodosPartidos();
  console.log(" Todos los partidos de fútbol jugados");
} catch (error: unknown) {
  const errorMessage =
    error instanceof Error ? error.message : "Error desconocido";
  console.log(` Error jugando partidos de fútbol: ${errorMessage}`);
}

try {
  torneoBasquet.jugarTodosPartidos();
} catch (error: unknown) {
  const errorMessage =
    error instanceof Error ? error.message : "Error desconocido";
  console.log(` Error jugando partidos de básquet: ${errorMessage}`);
}

console.log("\n=== TODOS LOS PARTIDOS DEL TORNEO DE FÚTBOL ===");
const partidosFutbol: Partido[] = torneoFutbol.listarPartidos();
partidosFutbol.forEach((partido, index) => {
  console.log(`\n${index + 1}. ${partido.toString()}`);
});

console.log("\n=== TODOS LOS PARTIDOS DEL TORNEO DE BÁSQUET ===");
const partidosBasquet: Partido[] = torneoBasquet.listarPartidos();
partidosBasquet.forEach((partido, index) => {
  console.log(`\n${index + 1}. ${partido.toString()}`);
});

console.log("\n=== RESULTADOS FINALES ===");

console.log("\n LIGA DE FÚTBOL - CLASIFICACIÓN FINAL:");
const clasificacionFutbol = torneoFutbol.obtenerClasificacion();
clasificacionFutbol.forEach((stats, index) => {
  console.log(
    `${index + 1}. ${stats.equipo.nombre} - ${stats.puntaje} pts (${
      stats.partidosGanados
    }G ${stats.partidosEmpatados}E ${stats.partidosPerdidos}P)`
  );
});

const ganadorFutbol = torneoFutbol.obtenerGanador();
console.log(`\n CAMPEÓN DE FÚTBOL: ${ganadorFutbol?.nombre}`);

console.log("\n LIGA DE BÁSQUET - CLASIFICACIÓN FINAL:");
const clasificacionBasquet = torneoBasquet.obtenerClasificacion();
clasificacionBasquet.forEach((stats, index) => {
  console.log(
    `${index + 1}. ${stats.equipo.nombre} - ${stats.puntaje} pts (${
      stats.partidosGanados
    }G ${stats.partidosEmpatados}E ${stats.partidosPerdidos}P)`
  );
});

const ganadorBasquet = torneoBasquet.obtenerGanador();
console.log(`\n CAMPEÓN DE BÁSQUET: ${ganadorBasquet?.nombre}`);
