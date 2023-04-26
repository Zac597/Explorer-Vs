/*
  Capturar 2 números e fazer as operações matemáticas
  de soma, subtração, multiplicação, divisão e resto da divisão

  E para cada operação mostrar o resultado 

*/


let numberOne = prompt("Digite o número 1: ")
let numberTwo = prompt("Digite o número 2")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne = numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo


alert("O da soma é " + sum)
alert("O da subtração é " + sub)
alert("O da multiplicação é " + mult)
alert("O da divisão é " + div)
alert("O resto da divisão é " + rest)
