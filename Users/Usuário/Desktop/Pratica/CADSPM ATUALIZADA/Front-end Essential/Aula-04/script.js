//1 - alterar o titulo usando GetElementById
const titulo = document.getElementById("titulo")
titulo.innerHTML = "Lista de compras";

//2 - Criar lista não ordenada usando o innerHTML
const container = document.getElementById("lista-container")
container.innerHTML = '<ul id="minha-lista"></ul>'

//3 - Adicionar items à lista
const lista = document.querySelector('#minha-lista')
const itens = ['Cola', 'Apontador', 'Lápis', 'Caneta']
itens.forEach(item => {lista.innerHTML += `<li>${item}</li>`})

//4 - Mudar a cor dos itens usando querySelectorAll
const corLista = document.querySelectorAll('#minha-lista li');
corLista.forEach(item => {item.style.color = 'magenta'})

//5 - Adicionar evento ao botão
document.getElementById('botao').addEventListener('click', function(){
    const novoItem = prompt("Adicionar um novo item:")
    if(novoItem){
        lista.innerHTML += `<li>${novoItem}</li>`
    }
})
