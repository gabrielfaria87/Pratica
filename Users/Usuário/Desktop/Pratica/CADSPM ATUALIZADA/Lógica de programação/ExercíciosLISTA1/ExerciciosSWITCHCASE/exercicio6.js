function pesquisaSatisfacao() {
    let ruim = 0, regular = 0, otimo = 0;

    for (let i = 0; i < 10; i++) {
        let entrada = prompt(`Cliente ${i + 1} - Digite a nota (0 a 10):`);
        let nota = Number(entrada);

        if (entrada === null) {
            alert("Entrada cancelada.");
            return;
        }

        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida! Digite um número de 0 a 10.");
            i--; // repete essa iteração
            continue;
        }

        if (nota >= 0 && nota <= 4) {
            ruim++;
            alert("Classificação: Ruim");
        } else if (nota >= 5 && nota <= 7) {
            regular++;
            alert("Classificação: Regular");
        } else if (nota >= 8 && nota <= 10) {
            otimo++;
            alert("Classificação: Ótimo");
        }
    }

    alert(
        "Resultado final da pesquisa:\n" +
        "Ruim: " + ruim + "\n" +
        "Regular: " + regular + "\n" +
        "Ótimo: " + otimo
    );
}

