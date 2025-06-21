function funcaoAcrescimo() {
  let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  let valor2 = parseFloat(prompt("Digite o segundo valor:"));

  let valor1ComAcrescimo = valor1 * 1.3;
  let valor2ComDesconto = valor2 * 0.75;

  alert("Primeiro valor com acréscimo de 30%: " + valor1ComAcrescimo.toFixed(2));
  alert("Segundo valor com desconto de 25%: " + valor2ComDesconto.toFixed(2));
}
