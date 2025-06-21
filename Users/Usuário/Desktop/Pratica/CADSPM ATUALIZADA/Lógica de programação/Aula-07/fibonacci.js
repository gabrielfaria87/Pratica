//Fibonacci
//cada número é a soma dos dois anteriores
//0, 1, 1, 2, 3, 5, 8, 13...
function fibonacci(n){
    //caso de base
    if(n === 0){ //F(0) = 0 e F(1) = 1
        return 0

    }
    if(n === 1){
        return 1

    }
    //passo recursivo F(n) =  F(n-1) + F(n -2)
    return fibonacci(n -1) + fibonacci(n -2);
}
console.log(fibonacci(6))