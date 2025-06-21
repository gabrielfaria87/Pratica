// Crie um array de 9 elementos numéricos e mostre através do laço
// todo o array

// let num = [1, 4, 5, 8, 9, 12, 13, 18, 19, 22]

// for(let i = 0; i <= num.length ; i++)
// {
//     console.log(`num ${i}: ${num[i]}`)
// }
// Neste array descubra a quantidade dos valores ímpares da lista
let valor2 = [1, 4, 5, 8, 9, 12, 13, 18, 19, 22]
// var cont = 0
// for(let i = 0; i < valor2.length ; i++){
//     if (valor2[i] % 2 === 1){
//         cont++
//     }    
//     console.log("OS números são: " + valor2[i])
// }
    
// console.log("A quantidade de números ímpares é: " + cont)
   
// foreach
valor2.forEach(function(item, indice){
    console.log("frutas na posição: ", indice, "é: ", item)
    
})
console.log("--------------------- exemplo 2 ----------------------")
valor2.forEach((valor2, index) => {
    console.log("frutas na posição: ", index, "é: ", valor2)
})

