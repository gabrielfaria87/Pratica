function funcaoSalario() {
  let valorHora = parseFloat(prompt("Digite o valor da hora aula:"));
  let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
  let descontoINSS = parseFloat(prompt("Digite o percentual de desconto do INSS (%):"));

  let salarioBruto = valorHora * horasTrabalhadas;
  let desconto = (descontoINSS / 100) * salarioBruto;
  let salarioLiquido = salarioBruto - desconto;

  alert("O salário líquido é: R$ " + salarioLiquido.toFixed(2));
}
