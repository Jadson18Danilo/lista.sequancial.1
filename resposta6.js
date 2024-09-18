//Faça um algoritmo que peça o raio de um círculo, calcule e mostre sua área.
const prompt = require("prompt-sync")()

const raio = parseInt(prompt(`Digite o valor do diâmetro:`))

const área = 3.14*(raio**2)

console.log(`O valor da área é ${area.toFixed(2)}`)

