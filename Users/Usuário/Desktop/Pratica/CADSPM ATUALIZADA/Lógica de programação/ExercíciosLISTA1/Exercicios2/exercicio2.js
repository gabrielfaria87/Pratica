function minutosDesdeMeiaNoite() {
  const horas = Number(prompt("Informe as horas atuais (0 a 23):"));
  const minutos = Number(prompt("Informe os minutos atuais (0 a 59):"));
  const totalMinutos = horas * 60 + minutos;
  alert("Minutos desde 00:00: " + totalMinutos);
}
