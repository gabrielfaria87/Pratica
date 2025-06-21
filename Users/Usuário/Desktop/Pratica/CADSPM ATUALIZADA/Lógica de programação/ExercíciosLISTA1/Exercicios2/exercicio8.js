function precoDeVenda() {
  const precoCusto = Number(prompt("Digite o preço de custo:"));
  const percentual = Number(prompt("Digite o percentual de acréscimo (%):"));
  const precoVenda = precoCusto + (precoCusto * (percentual / 100));
  alert("Preço de venda: R$ " + precoVenda.toFixed(2));
}
