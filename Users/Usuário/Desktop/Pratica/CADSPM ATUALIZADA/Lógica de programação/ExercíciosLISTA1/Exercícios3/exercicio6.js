function valoresTrocados() {
  let a = prompt("Digite o valor de A:");
  let b = prompt("Digite o valor de B:");

  let temp = a;
  a = b;
  b = temp;

  alert("Após a troca:\nA = " + a + "\nB = " + b);
}
