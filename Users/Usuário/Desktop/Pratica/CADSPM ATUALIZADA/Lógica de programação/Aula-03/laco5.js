// 5 valores digitados - esses valores serão somados e no final do programa
// mostre o total.
// SHIFT + ALT + F -- IDENTAÇÃO
function somar() {
    let soma = 0
    let contador = 0

    while (contador < 5) {
        let numero = prompt("Digite um valor");
        if (!isNaN(numero)) {
            soma += numero
            contador++
        }
        else {
            alert("Digite um número válido!!")
        }

    }
    alert(`A soma dos 5 números foi: ${soma}`);
}




// console.log("-------------------------------")
// console.log(isNaN("abc"))
// console.log(isNaN("10"))
// console.log(isNaN(20))
