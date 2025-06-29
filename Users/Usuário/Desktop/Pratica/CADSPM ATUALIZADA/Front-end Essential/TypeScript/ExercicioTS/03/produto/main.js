"use strict";
// //arquivo produto.ts
// //1 - Crie uma classe Produtos com atributos: codigo, nome, preco
// Crie os métodos SET: para inserir valores nos atributos.
// Crie os métodos GET: para visualizar os valores dos atributos
Object.defineProperty(exports, "__esModule", { value: true });
// arquivo main.ts
// 2 - Faça a exportação da classe Produtos e chame os métodos 
// para inserção os valores e os métodos para exibição dos 
// valores.
const produto_1 = require("./produto");
const prod = new produto_1.Produtos(1, 'Tesoura', 45);
prod.exibirCodigo();
prod.exibirNome();
prod.exibirPreco();
