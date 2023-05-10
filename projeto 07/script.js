const alunos = [ 
{
  name: "Miguel",
  fNote: 8,
  sNote: 7
},
{
  name: "Thiago",
  fNote: 5,
  sNote: 7
},
{
  name: "Sofia",
  fNote: 8,
  sNote: 9
},
{
  name: "Maria",
  fNote: 7,
  sNote: 7
},
]

function mediaNotes(fNote,sNote) {
  let media = (fNote + sNote) / 2
  return media
}


for (let aluno of alunos) {
  mediaAluno = mediaNotes(aluno.fNote, aluno.sNote)
  let passouOuNao = mediaAluno <7 ? 'Infelizmente não conseguiu dessa vez. Tente de novo na recuperação' : 'Parabéns você passou direto'

  alert(`A média de ${aluno.name} é ${mediaAluno}. ${passouOuNao}`)
}
