function progressaoGeometrica() {
  let primeiroTermo = parseFloat(prompt("Digite o 1º termo da PG:"));
  let razao = parseFloat(prompt("Digite a razão da PG:"));

  let quintoTermo = primeiroTermo * Math.pow(razao, 4);

  alert("O 5º termo da PG é: " + quintoTermo.toFixed(2));
}
