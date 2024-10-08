/* 4. Implemente um programa que receba uma string com o nome de uma fruta ("maçã",
"banana", "laranja", etc.) e exiba o preço da fruta com base em um conjunto de preços
predefinidos usando a estrutura switch.*/

// Definindo variavel prompt
const prompt = require(`prompt-sync`)();

// Pedindo para o usuario digitar uma fruta
const fruta = (prompt(`Digite uma fruta: `));

const valorMaca = 10;
const valorBanana = 5;
const valorLaranja = 7;
const valorUva = 8;
const valorPera = 8;

switch(fruta) {
    case 'maca':
        console.log(`R$ 10,00 Reais`)
        break;
    case 'banana':
        console.log(`R$ 5,00 Reais`)
        break;
    case 'laranja':
        console.log(`R$ 7,00 Reais`)
        break;
    case 'uva':
        console.log(`R$ 8,00 Reais`)
        break;
    case 'pera':
        console.log(`R$ 12,00 Reais`)
        break;
    default:
        console.log(`Produto Inexistente`)
}

