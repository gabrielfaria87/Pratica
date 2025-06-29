export class CalculadoraSimples {
  // Atributo
  resultado: number;

  // Construtor
  constructor() {
    this.resultado = 0;
  }

  // Métodos de ação
  somar(a: number, b: number): void {
    this.resultado = a + b;
  }

  subtrair(a: number, b: number): void {
    this.resultado = a - b;
  }

  multiplicar(a: number, b: number): void {
    this.resultado = a * b;
  }

  dividir(a: number, b: number): void {
    if (b !== 0) {
      this.resultado = a / b;
    } else {
      console.log("Erro: divisão por zero não é permitida.");
    }
  }

  potencia(base: number, expoente: number): void {
    this.resultado = Math.pow(base, expoente);
  }

  // SET
  setResultado(valor: number): void {
    this.resultado = valor;
  }

  // GET
  exibirResultado(): void {
    console.log(`Resultado: ${this.resultado}`);
  }
}
