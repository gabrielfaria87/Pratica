import { CalculadoraSimples } from "./calculadora";

// Instância da classe
const calc = new CalculadoraSimples();

// Calcule o resultado de 250 + 150
calc.somar(250, 150);
calc.exibirResultado();

// Calcule o resultado de 600 dividido por 3
calc.dividir(600, 3);
calc.exibirResultado();

// Calcule o valor de 2 elevado à 5ª potência
calc.potencia(2, 5);
calc.exibirResultado();
