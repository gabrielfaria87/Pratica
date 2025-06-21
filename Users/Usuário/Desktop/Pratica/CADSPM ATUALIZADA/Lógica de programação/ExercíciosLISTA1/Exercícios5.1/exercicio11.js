function potenciaBaseExpoente() {
  const b = Number(prompt("Digite a base:"));
  const e = Number(prompt("Digite o expoente:"));
  let resultado = 1;
  for (let i = 0; i < e; i++) {
    resultado *= b;
  }
  alert(`${b} elevado a ${e} = ${resultado}`);
}

