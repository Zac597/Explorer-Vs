let numberOne = prompt("Escolha um número")
let numberTwo = prompt("Escolha outro número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)
soma = numberOne + numberTwo



alert(`Os resultados dos calculos de cada operação são: 
Soma = ${soma}
Subtração = ${numberOne - numberTwo}
Multiplicação = ${numberOne * numberTwo}
Divisão = ${(numberOne / numberTwo).toFixed(2)}
Resto da divisão = ${numberOne % numberTwo}
`)

if ((soma % 2) == 0 ){
  alert(`A soma dos 2 números são pares`)
} else {
  alert(`A soma dos 2 números são Impares`)
}

if (numberOne == numberTwo) {
  alert(`Os números que você escolheu são iguais`)
} else {
  alert(`Os números que você escolheu são diferentes`)
}