function caixaEletronico() {
    let valor = Number(prompt("Digite o valor do saque (mínimo R$ 10):"))

    if (valor < 10 || valor % 10 !== 0) {
        alert("Valor inválido.")
        return
    }

    let notas100 = Math.floor(valor / 100)
    valor %= 100

    let notas50 = Math.floor(valor / 50)
    valor %= 50

    let notas20 = Math.floor(valor / 20)
    valor %= 20

    let notas10 = Math.floor(valor / 10)

    alert("Notas entregues:\nR$100: " + notas100 + "\nR$50: " + notas50 + "\nR$20: " + notas20 + "\nR$10: " + notas10)
}