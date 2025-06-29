export class Profissao{
    matricula:number
    nomeProfissao:string
    setor:string

    constructor(matricula:number,nomeProfissao:string,setor:string){
        this.matricula = matricula
        this.nomeProfissao = nomeProfissao
        this.setor = setor
    }

    exibirMatricula(){
        return`A matrícula é: ${this.matricula}`

    }
    exibirProfissao(){
        return`A profissão é: ${this.nomeProfissao}`
    }
    exibirSetor(){
        return`O setor é: ${this.setor}`
    }        
}