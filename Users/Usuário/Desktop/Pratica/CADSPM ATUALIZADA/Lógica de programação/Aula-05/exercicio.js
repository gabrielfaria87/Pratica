//////////Crie um array de strings com nome de produtos e utilize as funções:
//////////Inserir valores no array - push ou splice
////////// Delete o primeiro valor do array
////////// Delete o último valor do array
// Atualize o valor do indice 2 de seu array
// Excluir a partir do indice 2 a quantidade de 3 elementos
// Conte a quantidade de elementos no seu array

let produtos = ["sabonete", "pasta de dente", "shampoo", "desodorante", "escova"]
let cont = 0    
console.log(produtos)

// produtos.splice(1, 1, "tesoura", "xarope")
// console.log(produtos)

produtos.shift(1)
produtos.pop(1)

console.log(produtos)

