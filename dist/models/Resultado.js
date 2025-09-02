export class Resultado {
    golesLocal;
    golesVisitante;
    constructor(golesLocal, golesVisitante) {
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }
    toString() {
        return `${this.golesLocal} - ${this.golesVisitante}`;
    }
    get ganador() {
        if (this.golesLocal > this.golesVisitante)
            return "local";
        if (this.golesVisitante > this.golesLocal)
            return "visitante";
        return "empate";
    }
}
//# sourceMappingURL=Resultado.js.map