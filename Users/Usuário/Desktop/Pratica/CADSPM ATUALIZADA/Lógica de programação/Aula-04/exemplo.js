// Teste com switch case todos os dias da semana, caso não seja um dia válido, apareça dados inválidos.
// 1 - segunda, 2 - terça.. outros números - inválido

let dias = (9)

switch(dias){
    case 1:
        console.log("Hojé é domingo!");
        break;
    case 2:
        console.log("Hojé é segunda-feira!");
        break;
    case 3:
        console.log("Hojé é terça-feira!");
        break;
    case 4: 
        console.log("Hojé é quarta-feira!");
        break;
    case 5:
        console.log("Hojé é quinta-feira!");
        break;
    case 6:
        console.log("Hojé é sexta-feira!");
        break;
    case 7:
        console.log("Hojé é sábado!");
    default:
        console.log("Dia não reconhecido!")                       
}