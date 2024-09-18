//Faça um algoritmo que peça as 4 notas bimestrais e mostre a média.
const prompt = require("prompt-sync")()

const nota1 = parseInt(prompt(`Digite a primeiro nota:`))

const nota2 = parseInt(prompt(`Digite a segunda nota:`))

const nota3 = parseInt(prompt(`Digite a terceira nota:`))

const nota4 = parseInt(prompt(`Digite a quarta nota:`))

const media = (nota1 + nota2 + nota3 + nota4) /4

console.log(`A média é ${media}`)

