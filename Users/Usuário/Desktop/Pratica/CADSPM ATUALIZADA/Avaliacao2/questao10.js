function verificarMultiplos() {
    let inicio = Number(prompt("Digite o número inicial:"));
    let fim = Number(prompt("Digite o número final:"));

    if (!Number.isInteger(inicio) || !Number.isInteger(fim) || inicio > fim) {
        document.writeln("Intervalo inválido!");
        return;
    }

    let encontrou = false;
    document.writeln("Números pares e múltiplos de 3 no intervalo:<br>");

    for (let i = inicio; i <= fim; i++) {
        if ((i % 2 === 0) && (i % 3 === 0)) {
            document.writeln(i + "<br>");
            encontrou = true;
        }
    }

    if (!encontrou) {
        document.writeln("Nenhum número no intervalo satisfaz a condição.");
    }
}
