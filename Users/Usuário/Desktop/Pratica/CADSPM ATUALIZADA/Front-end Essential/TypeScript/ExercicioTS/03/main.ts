// //arquivo produto.ts
// //1 - Crie uma classe Produtos com atributos: codigo, nome, preco
// Crie os métodos SET: para inserir valores nos atributos.
// Crie os métodos GET: para visualizar os valores dos atributos

// arquivo main.ts
// 2 - Faça a exportação da classe Produtos e chame os métodos 
// para inserção os valores e os métodos para exibição dos 
// valores.

import { Produtos } from "./produto";

const prod = new Produtos(1, 'Tesoura', 45)

 prod.exibirCodigo()
 prod.exibirNome()
 prod.exibirPreco()
