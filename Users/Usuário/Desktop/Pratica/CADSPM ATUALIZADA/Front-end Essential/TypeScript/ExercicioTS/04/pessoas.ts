export class Pessoas{
    nome:string
    idade:number
    rg:number

    constructor(nome:string,idade:number,rg:number){
        this.nome = nome 
        this.idade = idade 
        this.rg = rg 
    }    

    nomeSET(nome:string){
        console.log(`Nome: ${this.nome}`)
    }
    idadeSET(idade:number){
        console.log(`Idade: ${this.idade}`)
    }
    rgSET(rg:number){
        console.log(`Rg: ${this.rg}`)
    }

}