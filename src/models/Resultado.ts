export class Resultado {
  constructor(public golesLocal: number, public golesVisitante: number) {}

  toString(): string {
    return `${this.golesLocal} - ${this.golesVisitante}`;
  }

  get ganador(): string {
    if (this.golesLocal > this.golesVisitante) return "local";
    if (this.golesVisitante > this.golesLocal) return "visitante";
    return "empate";
  }
}
