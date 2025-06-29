export class Produtos{
    codigo:number
    nome:string
    preco:number


constructor(codigo:number,nome:string,preco:number){
        this.codigo = codigo
        this.nome = nome
        this.preco = preco

}

codigoSet(codigo:number){
        this.codigo = codigo
    }
nomeSet(nome:string){
        this.nome = nome
    }
precoSet(preco:number){
        this.preco = preco
    }
    // GET
exibirCodigo(){
        console.log(`Código: ${this.codigo}`)
    }
exibirNome(){
        console.log(`Nome: ${this.nome}`)
    }
exibirPreco(){
        console.log(`Preço: ${this.preco}`)
    }

}