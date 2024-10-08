/* 1. Escreva um programa que receba um número de 1 a 7 e exiba o dia da semana
correspondente (por exemplo, 1 para "Domingo", 2 para "Segunda-feira", etc.). Use a
estrutura switch para implementar a solução.*/

// Definindo variavel prompt
const prompt = require(`prompt-sync`)();

// Pedindo para o usuario digitar um número
const numero = parseInt(prompt(`Informe um número entre 1 a 7: `));

// Executando o switch
switch(numero) {
    case 1:
        console.log(`DOMINGO`);
        break;
    case 2:
        console.log(`SEGUNDA-FEIRA`);
        break;
    case 3:
        console.log(`TERÇA-FEIRA`);
        break;
    case 4:
        console.log(`QUARTA-FEIRA`);
        break;
    case 5:
        console.log(`QUINTA-FEIRA`);
        break;
    case 6:
        console.log(`SEXTA-FEIRA`);
        break;
    case 7:
        console.log(`SABADO`);
        break;
    default:
        console.log(`Valor Inválido`);
}
