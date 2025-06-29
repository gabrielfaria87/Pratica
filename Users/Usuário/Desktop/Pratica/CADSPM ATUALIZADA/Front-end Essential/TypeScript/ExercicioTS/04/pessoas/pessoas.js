"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
class Pessoas {
    constructor(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }
    nomeSET(nome) {
        console.log(`Nome: ${this.nome}`);
    }
    idadeSET(idade) {
        console.log(`Idade: ${this.idade}`);
    }
    rgSET(rg) {
        console.log(`Rg: ${this.rg}`);
    }
}
exports.Pessoas = Pessoas;
