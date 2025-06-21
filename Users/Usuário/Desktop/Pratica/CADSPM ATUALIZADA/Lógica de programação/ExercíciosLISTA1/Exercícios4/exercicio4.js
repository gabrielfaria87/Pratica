function divisivelPor4e5() {
  const numero = Number(prompt("Digite um número inteiro:"));
  if (numero % 4 === 0 && numero % 5 === 0) {
    alert("O número é divisível por 4 e 5.");
  } else {
    alert("Valor não é divisível por 4 e 5.");
  }
}
