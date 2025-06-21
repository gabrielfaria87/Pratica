function somaParesWhile() {
    let limite = Number(prompt("Digite o número limite:"));
    if (isNaN(limite) || limite < 1) {
        document.writeln("Número inválido!");
        return;
    }

    let soma = 0;
    let i = 1;

    while (i <= limite) {
        if (i % 2 === 0) {
            soma += i;
        }
        i++;
    }

    document.writeln("A soma dos números pares até " + limite + " é: " + soma);
}
