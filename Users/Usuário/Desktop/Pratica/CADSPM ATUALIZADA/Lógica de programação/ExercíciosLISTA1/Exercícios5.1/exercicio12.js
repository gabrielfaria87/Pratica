function maiorMenorMedia() {
  let num, soma = 0, count = 0;
  let maior = -Infinity;
  let menor = Infinity;

  while (true) {
    num = Number(prompt("Digite um número (-1 para sair):"));
    if (num === -1) break;
    soma += num;
    count++;
    if (num > maior) maior = num;
    if (num < menor) menor = num;
  }

  if (count > 0) {
    alert(`Maior: ${maior}, Menor: ${menor}, Média: ${(soma / count).toFixed(2)}`);
  } else {
    alert("Nenhum número foi digitado.");
  }
}

