function mediaAluno() {
  let soma = 0;
  for (let i = 1; i <= 4; i++) {
    soma += Number(prompt(`Digite a nota ${i}:`));
  }
  const media = soma / 4;
  if (media >= 5) {
    alert(`Aprovado com média ${media.toFixed(2)}`);
  } else {
    alert(`Reprovado com média ${media.toFixed(2)}`);
  }
}

