//       0   1  2
//       |   |  |
//  0 - 10, 41, 41
//  1 - 20, 45, 47
//  2 - 10, 45, 54
let x = ["d", "j", "q"];
x[2]//2
const matriz = [
    [10, 41, 41, 20, 80],
    [20, 45, 47, 78, 55],
    [10, 45, 54, 67, 34]
]
// console.log(matriz [0][0])
// console.log(matriz [1][2])
//linha
for(let linha = 0; linha < matriz.length ; linha++){
    //coluna
    for(let coluna = 0; coluna < matriz[linha].length ; coluna++){
        console.log(`Elemento na posição: [${linha}][${coluna}] é ${matriz[linha][coluna]}`)


    }
}