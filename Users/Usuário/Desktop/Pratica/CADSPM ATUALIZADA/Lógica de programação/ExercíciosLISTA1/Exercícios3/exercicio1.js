function funcaoRaio() {
  let raio = parseFloat(prompt("Digite o valor do raio do círculo:"));
  const PI = 3.14159265;
  let area = PI * raio * raio;
  alert("A área do círculo é: " + area.toFixed(2));
}
