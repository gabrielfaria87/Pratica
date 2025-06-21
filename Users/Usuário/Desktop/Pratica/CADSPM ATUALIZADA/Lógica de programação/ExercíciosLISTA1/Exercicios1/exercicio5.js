function temperatura(){

    let tF = Number(prompt(`Escreva a temperatura atual em Fahrenheit: `))
    let tC = (tF - 32) * 5 / 9

    alert(`A temperatura convertida é de ${tC} graus celsius`)  
    
}