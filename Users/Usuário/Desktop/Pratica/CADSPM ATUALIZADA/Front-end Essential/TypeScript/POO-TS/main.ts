 import { Carro } from "./carro";
 import { Manutencao } from "./manutencao";

 //estancia de classe

 const car = new Carro('Fiat', 'Tempra', 95) 
 const man = new Manutencao('20-05-2025', '12:30', 'troca de pastilha')

 man.exibirData()
 man.exibirhora()
 man.exibirServico()