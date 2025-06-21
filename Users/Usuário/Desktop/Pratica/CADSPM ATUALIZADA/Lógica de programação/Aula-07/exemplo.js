//
function recursiva(x){
    if(x <= 10) {
        console.log("Essa é a minha função")
        return recursiva(x+1)
    }
}
recursiva(1)