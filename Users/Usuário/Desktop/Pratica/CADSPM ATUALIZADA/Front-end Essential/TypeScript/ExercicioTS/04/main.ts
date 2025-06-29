import { Pessoas } from "./pessoas";
import { Profissao } from "./profissao";

const pes = new Pessoas('gabriel', 38, 94722) 
const pro = new Profissao(94722, 'Militar', 'Desenvolvimento')

pro.exibirMatricula()
pro.exibirProfissao()
pro.exibirSetor()