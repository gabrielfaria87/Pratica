function tabuadaPersonalizada() {
    let base = Number(prompt("Digite o número base da tabuada:"));
    let limite = Number(prompt("Digite o número final do intervalo:"));

    if (isNaN(base) || isNaN(limite) || limite < 1) {
        document.writeln("Entrada inválida!");
        return;
    }

    document.writeln("Tabuada do " + base + " até " + limite + ":<br>");

    for (let i = 1; i <= limite; i++) {
        document.writeln(base + " x " + i + " = " + (base * i) + "<br>");
    }
}
