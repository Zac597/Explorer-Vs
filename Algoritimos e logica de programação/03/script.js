Aluno = prompt('Qual o seu nome?')
nota1 = prompt('Qual foi sua primeira nota?')
nota2 = prompt('Qual foi sua segunda nota?')
nota3 =prompt('Qual foi sua terceira nota?')

media = (Number(nota1) + Number(nota2) + Number(nota3))/3
results = media > 6
media = media.toFixed(2)

if (results) {
  alert('Parabéns ' + Aluno + '! você passou com uma média de: ' + media)
} else {
  alert('Putz, acredito em vc estude mais na próxima, sua média foi de: ' + media)
}