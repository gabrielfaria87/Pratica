"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manutencao = void 0;
class Manutencao {
    constructor(data, hora, servico) {
        this.data = data;
        this.hora = hora;
        this.servico = servico;
    }
    //métodos próprios inserção dos valores noa atributos - GET (visualizar) e SET (inserir)
    //SET
    dataSet(data) {
        this.data = data;
    }
    horaSet(hora) {
        this.hora = hora;
    }
    servicoSet(servico) {
        this.servico = servico;
    }
    // GET
    exibirData() {
        console.log(`Data: ${this.data}`);
    }
    exibirhora() {
        console.log(`Data: ${this.hora}`);
    }
    exibirServico() {
        console.log(`Data: ${this.servico}`);
    }
}
exports.Manutencao = Manutencao;
