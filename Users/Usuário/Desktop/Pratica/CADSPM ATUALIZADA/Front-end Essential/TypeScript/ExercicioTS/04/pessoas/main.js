"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoas_1 = require("./pessoas");
const profissao_1 = require("./profissao");
const pes = new pessoas_1.Pessoas('gabriel', 38, 94722);
const pro = new profissao_1.Profissao(94722, 'Militar', 'Desenvolvimento');
pro.exibirMatricula();
pro.exibirProfissao();
pro.exibirSetor();
