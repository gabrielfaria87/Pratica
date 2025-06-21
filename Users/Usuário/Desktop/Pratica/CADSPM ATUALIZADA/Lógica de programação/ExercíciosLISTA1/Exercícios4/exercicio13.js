function ordemCrescente() {
  const a = Number(prompt("Digite o valor de A:"));
  const b = Number(prompt("Digite o valor de B:"));
  const c = Number(prompt("Digite o valor de C:"));
  const numeros = [a, b, c];
  numeros.sort((x, y) => x - y);
  alert("Ordem crescente: " + numeros.join(", "));
}
