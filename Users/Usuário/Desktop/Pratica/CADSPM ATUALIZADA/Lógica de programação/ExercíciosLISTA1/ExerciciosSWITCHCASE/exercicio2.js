function controleEstoque() {
    let estoque = 0;
    let opcao = 0;

    while (opcao !== 4) {
        let entradaPrompt = prompt(
            "1. Entrada de produto\n" +
            "2. Saída de produto\n" +
            "3. Verificar estoque\n" +
            "4. Sair"
        );

        if (entradaPrompt === null) { 
            alert("Encerrando...");
            break;
        }

        opcao = Number(entradaPrompt);

        if (isNaN(opcao)) {
            alert("Por favor, digite um número válido!");
            continue; 
        }

        switch (opcao) {
            case 1:
                let entrada = Number(prompt("Quantos produtos deseja adicionar?"));
                if (!isNaN(entrada) && entrada > 0) {
                    estoque += entrada;
                } else {
                    alert("Quantidade inválida!");
                }
                break;
            case 2:
                let saida = Number(prompt("Quantos produtos deseja remover?"));
                if (!isNaN(saida) && saida > 0) {
                    if (saida <= estoque) {
                        estoque -= saida;
                    } else {
                        alert("Estoque insuficiente!");
                    }
                } else {
                    alert("Quantidade inválida!");
                }
                break;
            case 3:
                alert("Estoque atual: " + estoque);
                break;
            case 4:
                alert("Encerrando...");
                break;
            default:
                alert("Opção inválida");
        }
    }
}
