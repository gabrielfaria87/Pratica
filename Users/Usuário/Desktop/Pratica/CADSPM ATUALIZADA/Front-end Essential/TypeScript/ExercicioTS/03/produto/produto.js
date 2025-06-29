"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produtos = void 0;
class Produtos {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
    codigoSet(codigo) {
        this.codigo = codigo;
    }
    nomeSet(nome) {
        this.nome = nome;
    }
    precoSet(preco) {
        this.preco = preco;
    }
    // GET
    exibirCodigo() {
        console.log(`Código: ${this.codigo}`);
    }
    exibirNome() {
        console.log(`Nome: ${this.nome}`);
    }
    exibirPreco() {
        console.log(`Preço: ${this.preco}`);
    }
}
exports.Produtos = Produtos;
