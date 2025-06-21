function verificarPrimo() {
    let num = Number(prompt("Digite um número inteiro:"));

    if (!Number.isInteger(num) || num < 2) {
        document.writeln("Número inválido para verificar primo.");
        return;
    }

    let primo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        document.writeln(num + " é um número primo.");
    } else {
        document.writeln(num + " não é um número primo.");
    }
}
