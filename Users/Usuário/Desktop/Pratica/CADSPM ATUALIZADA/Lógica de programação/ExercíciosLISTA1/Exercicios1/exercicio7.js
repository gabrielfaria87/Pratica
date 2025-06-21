function combustivel(){
    let distancia = Number(prompt("Escreva a distância a ser percorrida em KM: "))
    let autonomia = Number(prompt("Digite quantos KM o automóvel percorre por litro de combustível: "))
    let litros = distancia / autonomia

    alert(`Durante a viagem serão gastos ${litros} litros.`)
    
}