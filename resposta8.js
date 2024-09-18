//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas
//trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const prompt = require("prompt-sync")()

const salarioPorHora = parseFloat(prompt(`Digite quanto você ganha por hora:`))

const horasTrabalhadas = parseFloat(prompt(`Digite o número de horas trabalhadas no mês:`))

const salarioTotal = salarioPorHora * horasTrabalhadas;

console.log(`O seu salário total no mês é R$ ${salarioTotal.toFixed(2)}`)
