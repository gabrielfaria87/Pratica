function percentualVotos() {
  const total = Number(prompt("Digite o número total de eleitores:"));
  const brancos = Number(prompt("Votos brancos:"));
  const nulos = Number(prompt("Votos nulos:"));
  const validos = Number(prompt("Votos válidos:"));

  alert(
    `Percentual de votos:\n` +
    `Brancos: ${(brancos / total * 100).toFixed(2)}%\n` +
    `Nulos: ${(nulos / total * 100).toFixed(2)}%\n` +
    `Válidos: ${(validos / total * 100).toFixed(2)}%`
  );
}
