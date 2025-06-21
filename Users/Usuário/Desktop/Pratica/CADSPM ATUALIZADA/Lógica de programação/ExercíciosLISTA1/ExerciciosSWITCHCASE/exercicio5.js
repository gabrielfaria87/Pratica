function filaAtendimento() {
    let fila = []
    let opcao

    while (opcao !== 4) {
        opcao = Number(prompt("1. Adicionar pessoa à fila\n2. Atender próxima pessoa\n3. Mostrar fila\n4. Sair"))

        switch (opcao) {
            case 1:
                let nome = prompt("Digite o nome:")
                fila.push(nome)
                break
            case 2:
                if (fila.length > 0) {
                    alert("Atendido: " + fila.shift())
                } else {
                    alert("Fila vazia")
                }
                break
            case 3:
                alert("Fila: " + fila.join(", "))
                break
            case 4:
                alert("Encerrando fila...")
                break
            default:
                alert("Opção inválida")
        }
    }
}