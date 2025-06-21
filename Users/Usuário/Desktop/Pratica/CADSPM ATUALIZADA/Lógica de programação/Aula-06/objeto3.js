//
let pessoa = {
    nome: "Julio",
    idade: 25,
    cpf: 11360110709
}
let pessoas = []
//função para criar uma nova pessoa
function criarPessoa(n, i, c) {
    const pessoa = {
        nome: n,
        idade: i,
        cpf: c
    }
    pessoas.push(pessoa)
    console.log(`Pessoa adicionada: ${n}, ${i} anos, ${c}`)
}
//função listar todas as pessoas
function listarPessoas() {
    console.log("\n Lista de pessoas: ")
    pessoas.forEach((valor, indice) => {
        console.log(`${indice} : ${valor.nome} - ${valor.idade} anos, ${valor.cpf}`)

    })
}

//Função para atualizar uma pessoa
function atualizarPessoa(indice, novoNome, novaIdade, novaCpf) {
    if (pessoas[indice]) {
        pessoas[indice].nome = novoNome;
        pessoas[indice].idade = novaIdade;
        pessoas[indice].cpf = novaCpf;
        console.log(`pessoa atualizada no índice: ${indice}`)
    }
    else {
        console.log("índice inválido!")
    }

}

//Função para excluir uma pessoa
function excluirPessoa(indice){
    if(pessoas[indice]){
        const removida = pessoas.splice(indice, 1)
        console.log(`Pessoa removida: ${removida[0].nome}`)
    }
    else{
        console.log("Índice inválido!")
    }
}
//==============testes=================
criarPessoa("Santos", 20, 12312332145)
criarPessoa("Marcelo", 30, 12312662145)
criarPessoa("Santos", 20, 12312332145)

listarPessoas()
atualizarPessoa(2, "Chapolin", 20, 987788965423)
listarPessoas()
excluirPessoa(2)
listarPessoas()