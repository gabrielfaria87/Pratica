function operacoesBasicas() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));
  alert(
    "Soma: " + (num1 + num2) +
    "\nSubtração 1-2: " + (num1 - num2) +
    "\nSubtração 2-1: " + (num2 - num1) +
    "\nMultiplicação: " + (num1 * num2) +
    "\nDivisão: " + (num1 / num2).toFixed(2) +
    "\nResto da divisão: " + (num1 % num2)
  );
}
