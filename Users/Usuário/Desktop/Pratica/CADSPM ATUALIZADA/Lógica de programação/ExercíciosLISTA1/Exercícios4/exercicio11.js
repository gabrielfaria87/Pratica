function algarismoCentena() {
  const numero = Number(prompt("Digite um número de 3 dígitos (ex: 123):"));
  if (numero >= 100 && numero <= 999) {
    const centena = Math.floor(numero / 100);
    alert("Algarismo da centena: " + centena);
  } else {
    alert("Número inválido. Digite um número entre 100 e 999.");
  }
}
