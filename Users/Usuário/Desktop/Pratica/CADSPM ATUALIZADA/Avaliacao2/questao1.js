// Calculadora Avançada

function Calculadora() {
    // Converte as entradas para número usando Number()
    let n1 = Number(prompt("Digite um valor"));
    let n2 = Number(prompt("Digite outro valor"));
    let operacao = prompt("Qual operação você quer fazer? (+, -, *, /, %, **)");

    let resultado;

    // Comparações corrigidas com ===
    if (operacao === "+") {
        resultado = n1 + n2;
    } else if (operacao === "-") {
        resultado = n1 - n2;
    } else if (operacao === "*") {
        resultado = n1 * n2;
    } else if (operacao === "/") {
        if (n2 === 0) {
            document.writeln("Não é possível dividir por zero!");
            return;
        }
        resultado = n1 / n2;
    } else if (operacao === "%") {
        resultado = n1 % n2;
    } else if (operacao === "**") {
        resultado = n1 ** n2;
    } else {
        document.writeln("Operação inválida.");
        return;
    }

   
    document.writeln("O resultado da operação é: " + resultado);
}



