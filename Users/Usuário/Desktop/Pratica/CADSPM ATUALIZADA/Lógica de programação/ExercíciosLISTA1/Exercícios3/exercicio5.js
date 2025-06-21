function valorOleo() {
  let raio = parseFloat(prompt("Digite o raio da lata:"));
  let altura = parseFloat(prompt("Digite a altura da lata:"));
  const PI = 3.14159265;

  let volume = PI * raio * raio * altura;
  alert("O volume da lata é: " + volume.toFixed(2));
}
