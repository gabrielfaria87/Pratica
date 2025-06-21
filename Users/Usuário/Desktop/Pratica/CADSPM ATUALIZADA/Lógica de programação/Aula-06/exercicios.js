//
const alunos = [
    {nome:"Maria", nota:7.5},
    {nome:"Celso", nota:9.2},
    {nome:"Pedro", nota:6.8},
    {nome:"Gabriel", nota:5.5},
    {nome:"Mariana", nota:2.8},
];
// 1 - ordenar por nota (crescente)
const porNota = [...alunos].sort((a, b) => a.nota - b.nota) 
console.log("Por nota crescente: ")
console.log(porNota)
// 2 - ordenar por nome (alfabético)
const porNome = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome))
console.log("Por ordem alfabética: ")
console.log(porNome)
// 3 - Maior nota
const maiorNota = porNota[porNota.length -1]
console.log("Maior nota", maiorNota)

// 4 - Menor nota
const menorNota = porNota[0];
console.log("Menor nota", menorNota)
