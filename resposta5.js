/* 5. Crie um programa que receba um valor numérico correspondente a uma operação
aritmética (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão) e, com base
nesse valor, execute a operação entre dois números fornecidos pelo usuário.*/

// Definindo variavel prompt
const prompt = require(`prompt-sync`)();

// Tela para o usuario escolher a operação
console.log(`Qual operação deseja fazer? 1-SOMA 2-SUBTRAÇÃO 3-MULTIPLICAÇÃO 4-DIVISÃO`);

// Pedindo para o usuario digitar um numero
const operacao = parseInt(prompt(`Digite uma número de 1 a 4: `));

// Definindo variavel n1 e n2
const n1 = parseInt(prompt(`Digite o primeiro número: `));

const n2 = parseInt(prompt(`Digite o segundo número: `));

// Definindo variavel resultado
let resultado = 0;

// Executando o switch
switch(operacao) {
    case 1:
        resultado = n1 + n2
        break;
    case 2:
        resultado = n1 - n2
        break;
    case 3:
        resultado = n1 * n2
        break;
    case 4:
        resultado = n1 / n2
        break;
    default:
        resultado = `Número Inválido`;

}
console.log(`O resultado é ${resultado}`)