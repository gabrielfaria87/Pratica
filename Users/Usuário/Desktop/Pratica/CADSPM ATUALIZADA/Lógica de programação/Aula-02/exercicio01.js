// Crie um programinjha que receba uma senha e verifique
// se for verdade libere o acesso se não cancelar acesso
// senha armazenada comparada com a inserida
// Print com template]

// Exercicio: faça um programa que receba 4 notas e faça a média dessas notas
// No final o programa vai informar ao aluno: média <= 5 "reprovado", média > 5 e Média < 7
// "recuperação", Média > 7 "Aprovado".
// Faça o fluxograma dos programas acima
// draw.io

let n1 = 4
let n2 = 5
let n3 = 7
let n4 = 8
let media = (n1 + n2 + n3 + n4 / 4)

if (media < 5){console.log(`Reprovado !`);}
    else if (media >5 && media < 7)
        { console.log(`Recuperação !`);}
            else    
                { console.log('Aprovado');}

// console.log(media < 5 ? "Reprovado !" : media > 5 && < 7 ? "Recuperação !" : "Aprovado !")                