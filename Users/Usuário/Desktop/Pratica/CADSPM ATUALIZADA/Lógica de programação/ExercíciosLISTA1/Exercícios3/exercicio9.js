function progressaoAritmetica() {
  let primeiroTermo = parseFloat(prompt("Digite o 1º termo da PA:"));
  let razao = parseFloat(prompt("Digite a razão da PA:"));

  let decimoTermo = primeiroTermo + (10 - 1) * razao;

  alert("O 10º termo da PA é: " + decimoTermo.toFixed(2));
}
