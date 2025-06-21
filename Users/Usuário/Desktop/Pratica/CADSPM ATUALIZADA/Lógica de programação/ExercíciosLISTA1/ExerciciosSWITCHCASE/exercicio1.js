function classificacaoIdade() {
let totalPessoas = Number(prompt("Digite o número de pessoas a serem cadastradas: "))

let criancas = 0
let adolescentes = 0
let adultos = 0
let idosos = 0

for (let i = 1; i <= totalPessoas; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i}:`)
    let idade = Number(prompt(`Digite a idade de ${nome}:`))

    if (idade <= 12) {
        criancas++
    } else if (idade >= 13 && idade <= 17) {
        adolescentes++
    } else if (idade >= 18 && idade <= 59) {
        adultos++
    } else if (idade >= 60) {
        idosos++
    }
}
alert("Total de pessoas cadastradas: " + totalPessoas)
alert("Crianças: " + criancas)
alert("Adolescentes: " + adolescentes)
alert("Adultos: " + adultos)
alert("Idosos: " + idosos)
}
