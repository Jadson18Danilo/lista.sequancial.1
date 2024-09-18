//Faça um algoritmo que peça a temperatura em graus Celsius, transforme e mostre em
//graus Fahrenheit.
const prompt = require("prompt-sync")()

const celsius = parseFloat(prompt(`Digite a temperatura em graus Celsius:`));

const fahrenheit = (celsius * 9/5) + 32;

console.log(`A temperatura em graus Fahrenheit é ${fahrenheit.toFixed(2)}`);