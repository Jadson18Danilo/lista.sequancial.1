//Faça um algoritmo que calcule a área de um quadrado, em seguida mostre o dobro desta
//área para o usuário.
const prompt = require("prompt-sync")()

const lado = parseFloat(prompt("Digite o valor do lado do quadrado:"));

const area = lado * lado;

let dobroArea = 2 * area;

console.log(`A área do quadrado é ${area.toFixed(2)} e o dobro da área é ${dobroArea.toFixed(2)}`);
