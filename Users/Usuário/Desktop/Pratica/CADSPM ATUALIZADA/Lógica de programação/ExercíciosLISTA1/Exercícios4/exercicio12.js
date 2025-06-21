function maiorMenor() {
  let maior = -Infinity;
  let menor = Infinity;

  for (let i = 1; i <= 5; i++) {
    const num = Number(prompt(`Digite o número ${i}:`));
    if (num > maior) maior = num;
    if (num < menor) menor = num;
  }

  alert(`Maior número: ${maior}\nMenor número: ${menor}`);
}
