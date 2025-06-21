function quadrado(){
    let numero = Number(prompt("Digite um número: "))
    let qd = numero * numero
    let raiz = Math.sqrt(numero)

    alert(`O número escolhido foi ${numero}, o quadrado de ${numero} é ${qd} e sua raiz quadrada é ${raiz.toFixed(1)}`)
}
