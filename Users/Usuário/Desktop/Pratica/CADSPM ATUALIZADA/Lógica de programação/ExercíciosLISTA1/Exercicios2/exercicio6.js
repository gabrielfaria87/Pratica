function salarioComComissao() {
  const nome = prompt("Digite o nome do vendedor:");
  const salarioFixo = Number(prompt("Digite o salário fixo:"));
  const vendas = Number(prompt("Total de vendas no mês:"));
  const comissao = vendas * 0.15;
  const salarioFinal = salarioFixo + comissao;
  alert(
    `Nome: ${nome}\nSalário Fixo: R$ ${salarioFixo.toFixed(2)}\n` +
    `Comissão: R$ ${comissao.toFixed(2)}\nSalário Final: R$ ${salarioFinal.toFixed(2)}`
  );
}
