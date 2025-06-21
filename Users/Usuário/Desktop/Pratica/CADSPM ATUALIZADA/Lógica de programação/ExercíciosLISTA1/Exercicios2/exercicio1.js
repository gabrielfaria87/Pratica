function gorjetaRestaurante() {
  const conta = Number(prompt("Digite o valor da conta:"));
  const total = conta + conta * 0.10;
  alert("Total com 10% de gorjeta: R$ " + total.toFixed(2));
}
