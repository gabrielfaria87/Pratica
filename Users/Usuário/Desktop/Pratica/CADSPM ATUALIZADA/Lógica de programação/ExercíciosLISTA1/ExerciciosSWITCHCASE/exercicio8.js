function analiseVendas() {
    let vendas = [];
    let total = 0;
    let acima300 = 0;

    for (let i = 1; i <= 7; i++) {
        let valor = Number(prompt(`Digite o valor vendido no dia ${i}:`));

        if (isNaN(valor) || valor < 0) {
            alert("Valor inválido. Digite um número positivo.");
            i--; // repete o dia
            continue;
        }

        vendas.push(valor);
        total += valor;
        if (valor > 300) acima300++;
    }

    let media = total / vendas.length;

    alert(
        "Total vendido: R$ " + total.toFixed(2) +
        "\nMédia diária: R$ " + media.toFixed(2) +
        "\nDias com vendas acima de R$ 300: " + acima300
    );
}
