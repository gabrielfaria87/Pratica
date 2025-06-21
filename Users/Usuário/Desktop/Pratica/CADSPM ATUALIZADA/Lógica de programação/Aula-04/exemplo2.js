// 
function calculo(){
    let num1 = Number( prompt("Digite o 1º valor"));
    let operador = prompt("Digite a operação desejada: (+, -, *, /)");
    let num2 = Number(prompt("Digite o 2º valor"));

    let resultado = 0;

    switch(operador){
    case "+":
        resultado = num1 + num2
      
        break;
    case "-":
        resultado = num1 - num2
        break;
    case "*":
        resultado = num1 * num2
        break;
    case "/": 
        resultado = num1 / num2
        break;
    default:
        alert(`Operador não reconhecido`);
    }
    alert(`O resultado é: ${resultado}`);
}
