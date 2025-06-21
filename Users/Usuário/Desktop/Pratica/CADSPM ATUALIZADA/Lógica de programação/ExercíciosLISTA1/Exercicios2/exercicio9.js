function idadeEmDias() {
  const anos = Number(prompt("Digite a idade em anos:"));
  const meses = Number(prompt("Digite os meses:"));
  const dias = Number(prompt("Digite os dias:"));
  const totalDias = (anos * 365) + (meses * 30) + dias;
  alert("Idade em dias: " + totalDias);
}
