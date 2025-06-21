function mediaTentativas() {
    for (let i = 0; i < 5; i++) {
        let nome = prompt("Nome do aluno:")
        let soma = 0

        for (let j = 1; j <= 3; j++) {
            let nota = Number(prompt("Nota " + j + " de " + nome + ":"))
            soma += nota
        }

        let media = soma / 3
        let resultado = media >= 7 ? "Aprovado" : "Reprovado"
        alert(nome + " - Média: " + media.toFixed(1) + " - " + resultado)
    }
}