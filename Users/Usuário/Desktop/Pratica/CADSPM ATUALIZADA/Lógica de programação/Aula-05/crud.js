//crud simples

let pessoas = [];

//Create
function adicionar(nome){
    pessoas.push(nome);
}
//Read
function listar(){
    console.log(pessoas)
}
//Update
function atualizar(indice, novoNome){
    pessoas[indice] = novoNome
}
//Delete
function remover(indice){
    pessoas.splice(indice, 1)
}

adicionar("Carlos");
adicionar("Marcia");
atualizar(1, "Ferreira")
listar();
remover(1);
listar();