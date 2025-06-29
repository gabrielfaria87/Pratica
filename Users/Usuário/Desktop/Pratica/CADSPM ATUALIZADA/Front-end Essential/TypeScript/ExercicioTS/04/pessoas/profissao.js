"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profissao = void 0;
class Profissao {
    constructor(matricula, nomeProfissao, setor) {
        this.matricula = matricula;
        this.nomeProfissao = nomeProfissao;
        this.setor = setor;
    }
    exibirMatricula() {
        return `A matrícula é: ${this.matricula}`;
    }
    exibirProfissao() {
        return `A profissão é: ${this.nomeProfissao}`;
    }
    exibirSetor() {
        return `O setor é: ${this.setor}`;
    }
}
exports.Profissao = Profissao;
