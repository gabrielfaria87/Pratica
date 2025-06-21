function verificaCapital() {
  const resposta = prompt("Qual a capital do Brasil?").trim().toLowerCase();
  if (resposta === "brasília" || resposta === "brasilia") {
    alert("Resposta correta!");
  } else {
    alert("Resposta errada. A capital é Brasília.");
  }
}

