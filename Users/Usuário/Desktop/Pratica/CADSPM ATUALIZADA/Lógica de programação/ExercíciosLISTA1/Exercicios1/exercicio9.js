function juros(){
    let v1 = Number(prompt("Digite o valor da parcela: "))
    let atraso = Number(prompt("Digite a quantidade de dias de atraso: "))
    let taxa = Number(prompt("Digite a taxa de juros: "))
    let resultado = v1 + (v1 * (taxa / 100) * atraso)

alert(`O valor corrigido é: ${resultado}`)
}