//Faça um algoritmo que converta metros para centímetros.
const prompt = require("prompt-sync")()

const metros = parseInt(prompt(`Digite metros: `))

const cent = metros * 100

console.log(`O valor convertido para centrimetros é: ${cent} cm`)

