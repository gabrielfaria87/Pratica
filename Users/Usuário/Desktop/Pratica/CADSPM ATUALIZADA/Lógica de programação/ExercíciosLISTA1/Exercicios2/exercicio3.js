function pesoAlturaConversao() {
  const peso = Number(prompt("Digite seu peso em kg:"));
  const altura = Number(prompt("Digite sua altura em metros:"));
  alert("Peso em gramas: " + (peso * 1000) + "g\nAltura em cm: " + (altura * 100) + "cm");
}
