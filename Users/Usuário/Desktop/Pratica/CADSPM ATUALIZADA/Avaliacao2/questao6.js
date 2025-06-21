function calcularFatorial() {
    let num = Number(prompt("Digite um número inteiro positivo:"));

    if (!Number.isInteger(num) || num < 0) {
        document.writeln("Número inválido!");
        return;
    }

    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }

    document.writeln("Fatorial de " + num + " é: " + fatorial);
}
