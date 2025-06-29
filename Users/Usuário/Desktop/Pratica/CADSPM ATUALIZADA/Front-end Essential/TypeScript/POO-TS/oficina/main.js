"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const manutencao_1 = require("./manutencao");
//estancia de classe
const car = new carro_1.Carro('Fiat', 'Tempra', 95);
const man = new manutencao_1.Manutencao('20-05-2025', '12:30', 'troca de pastilha');
man.exibirData();
man.exibirhora();
man.exibirServico();
