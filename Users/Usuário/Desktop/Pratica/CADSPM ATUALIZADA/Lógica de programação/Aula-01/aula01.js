//tipos de variaveis - var, let e const
//redeclaração
let nome = 'Carlos';
nome = 'Celso';
console.log(nome);
// Retribuição - Mutabilidade
var valor1 = 'Olá você!';
var valor1 = 'Olá você!!!';
console.log(valor1);
// // Tipos e const
const valorIp = 12125412;
// // Hoisting


// // Visibilidade
console.log('---------------------------------');
// {
//     console.log('Isso é um bloco');
//     let idade = 25;
//     const real = 50;
// }


// {
  
//    var x = 'Teste de escopo!';

// }   

// console.log(idade);
// console.log(real);

// function() { instruções - tarefas específicas }- bloco
function executar()
{
    // instrução
    console.log("Dentro da função!!");
    let numero = 200;
    console.log(numero);
}

executar();
