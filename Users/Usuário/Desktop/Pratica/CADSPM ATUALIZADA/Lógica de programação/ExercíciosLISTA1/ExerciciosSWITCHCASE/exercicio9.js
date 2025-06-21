function verificarNumero() {
    let lista = [10, 22, 35, 47, 58, 61, 73, 84, 96, 100]
    let numero = Number(prompt("Digite um número para verificar:"))
    let encontrado = false

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            encontrado = true
            break
        }
    }

    alert(encontrado ? "Número está na lista." : "Número não encontrado.")
}