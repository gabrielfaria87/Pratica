function numerosPrimos() {
    let inicio = Number(prompt("Digite o número inicial:"))
    let fim = Number(prompt("Digite o número final:"))
    let primos = ""

    for (let i = inicio; i <= fim; i++) {
        let ehPrimo = true
        if (i <= 1) ehPrimo = false

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                ehPrimo = false
                break
            }
        }
        
        if (ehPrimo) {
            primos += i + " "
        }
    }

    alert("Números primos: " + primos)
}