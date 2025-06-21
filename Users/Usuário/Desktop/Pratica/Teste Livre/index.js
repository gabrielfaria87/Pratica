console.log("esta rodando o script")

let end = document.getElementById("endereco")

fetch("https://viacep.com.br/ws/01001000/json/")
.then( (Response)=>{ return responde.json()})
.catch()

end.innerHTML = "Rua das Flores, 123, Jardim das Rosas, SP";