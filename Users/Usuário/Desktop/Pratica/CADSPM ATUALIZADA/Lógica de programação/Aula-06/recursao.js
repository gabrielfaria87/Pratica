//laço

// for(let x = 5; x > 0; x--){
//     console.log(x)
// }

//função recursiva
function contagemRegressiva(n){
    console.log(n)
    //caso base
    if(n === 0){
        return
    }
    //chamada recursiva
    contagemRegressiva(n -1)
}
contagemRegressiva(5)