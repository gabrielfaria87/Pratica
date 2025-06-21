function valorPrestacoes() {
  const valorCompra = Number(prompt("Digite o valor da compra:"));
  const numPrestacoes = Number(prompt("Número de prestações (máx 10):"));
  const valorParcela = valorCompra / numPrestacoes;
  alert(`Valor de cada prestação: R$ ${valorParcela.toFixed(2)}`);
}
