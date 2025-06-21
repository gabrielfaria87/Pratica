function mediaAritmetica() {
    let soma = 0;
    let count = 0;

    while (true) {
        let entrada = prompt("Digite um número ou 'fim' para terminar:");
        if (entrada.toLowerCase() === "fim") {
            break;
        }

        let num = Number(entrada);
        if (!isNaN(num)) {
            soma += num;
            count++;
        } else {
            alert("Entrada inválida, digite um número ou 'fim'.");
        }
    }

    if (count === 0) {
        document.writeln("Nenhum número válido foi digitado.");
    } else {
        let media = soma / count;
        document.writeln("A média dos números digitados é: " + media.toFixed(2));
    }
}
