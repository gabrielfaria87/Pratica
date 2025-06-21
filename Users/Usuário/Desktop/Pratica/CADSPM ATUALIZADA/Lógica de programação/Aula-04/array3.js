// let valor2 = [1, 4, 5, 8, 9, 12, 13, 18, 19, 22]
// let valorarray = []
// // inserir valor no final do array
// valor2.push(60);
// valorarray.push(120);
// valorarray.push(30);
// // valorarray.pop(); //remove o ultimo valor do array
// valorarray.shift();
// console.log("Valor do array: " + valorarray[0])
// console.log("Valor do array: " + valorarray[1])
// valorarray[1] = 89;
// console.log("Valor trocado: " + valorarray[1])
// console.log(valor2[9])

let valor2 = [1, 4, 5, 8, 9, 12, 13, 18, 19, 22]

let total = valor2.map( function(valor){
    return valor * 2;

})
console.log('Original', valor2)
console.log('Dobrado', total)

// exemplo

let numeros2 = [1, 5, 4, 7]

let dobrados2 = numeros2.map(valor => valor * 2)

let nome = ["Carlos", "João", "Celia"]

// toUpperCase - converter os valores string todos para maiusculo
// toLowerCase - minusculas

let nome2 = ["Maria", "Ana", "Carlos", "João", "Celia"];
let nomeMaiusculo = nome2.map((item) => item.toUpperCase());
console.log(nome2);
console.log(nomeMaiusculo);
