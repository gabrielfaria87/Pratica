function verificaDivisor() {
  const num1 = Number(prompt("Digite o primeiro número (dividendo):"));
  const num2 = Number(prompt("Digite o segundo número (divisor):"));
  if (num2 !== 0 && num1 % num2 === 0) {
    alert(`${num2} é divisor de ${num1}.`);
  } else {
    alert(`${num2} não é divisor de ${num1}.`);
  }
}

