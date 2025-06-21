function idade(){
    let idade = prompt("Informe a idade:")
    let nacionalidade = prompt("Informe a nacionalidade:").toLowerCase();
    // document.writeln(`A idade é: ${idade}`)
    // alert(`A idade é: ${idade}`)
    if(idade >= 16) {
        if(nacionalidade === "brasileira"){
            document.writeln("Pode votar no Brasil");
        }
        else{
            document.writeln("Não pode votar no Brasil");
        }
    }
    else{
        document.writeln("Ainda não tem idade para votar!!");
    }
}