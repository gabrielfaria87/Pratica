//teste
//fatorial - fibonacci
//n!
//5 = 5 * 4 * 3 * 2 * 1 = 120
function fatorial(n){
    //caso de base
    if(n === 0){
        return 1
    }
    else{
        return n * fatorial(n -1) //chamada recursiva
    }
}

console.log(fatorial(5))