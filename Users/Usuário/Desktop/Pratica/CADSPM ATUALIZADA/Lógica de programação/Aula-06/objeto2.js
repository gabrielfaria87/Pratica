//uso com foreach

const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 50 }
]
console.log("Produtos acima de R$ 100: ")
produtos.forEach(function(item){ 
    if(item.preco > 100)
        console.log(`- ${item.nome}: R$ ${item.preco}`)

})