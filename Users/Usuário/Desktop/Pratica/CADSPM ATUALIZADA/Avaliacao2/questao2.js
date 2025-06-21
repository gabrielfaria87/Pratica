function classificarIdade() {
    let idade = Number(prompt("Digite sua idade"));
    let classificacao;

    if (idade <= 12) {
        classificacao = "Criança";
    } else if (idade <= 17) {
        classificacao = "Adolescente";
    } else if (idade <= 59) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    document.writeln("Classificação etária: " + classificacao);
}