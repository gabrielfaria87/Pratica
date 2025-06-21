function funcaoHipotenusa() {
  let cateto1 = parseFloat(prompt("Digite o valor do cateto 1:"));
  let cateto2 = parseFloat(prompt("Digite o valor do cateto 2:"));

  let hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);

  alert("A hipotenusa é: " + hipotenusa.toFixed(2));
}
