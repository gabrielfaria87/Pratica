function verificaNumero() {
  const numero = Number(prompt("Digite um número:"));
  if (numero > 20) {
    alert("Metade do número: " + (numero / 2));
  } else {
    alert("Número sem alterações: " + numero);
  }
}

