// // split - elemento de string
// const frase = "JavaScript é incrível"
// console.log(frase)
// const palavras = frase.split(" ")
// console.log(palavras)

// const nome = "Ana,Bruno,Carlos,André"
// const lista = nome.split(",")
// console.log(lista)


// const letra = "abc"
// const p = letra.split("")
// console.log(p)

// crie um programa que leia uma string e mostre o total de vogais existentes
const texto = "Aprendizado constante!"
let contador = 0

console.log(texto.includes("constante!"))

texto.toLocaleLowerCase().split("").forEach(letra =>{
    if("aeiou".includes(letra))
        contador++
})
console.log(`A quantidade de vogais: ${contador}`)
// utilize o split para verificar um texto e descobrir a quantidade de espaços

let frase = "A programação é legal !!"
let cont = 0
frase.split("").forEach( espaco => {
    if(espaco === ' ')
    {
        cont++
    }
})
console.log(`A quantidade de espaços na frase é: ${cont}`)

// let frase = "Aprogramção é legal!!"
//function contarespaco(frase2){
// const parte = frase.split(" ");
// const numeroespaco = parte.lenght - 1
// return numeroespaco
// }
// console.log

