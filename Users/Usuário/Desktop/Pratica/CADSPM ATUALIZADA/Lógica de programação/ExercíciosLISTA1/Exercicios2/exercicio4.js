function calculoIMC() {
  const peso = Number(prompt("Digite seu peso em kg:"));
  const altura = Number(prompt("Digite sua altura em metros:"));
  const imc = peso / (altura * altura);
  alert("Seu IMC é: " + imc.toFixed(2));
}
