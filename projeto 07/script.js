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


const mediaNotes = (aluno) => {
  return `O aluno(a) ${aluno.name} possui uma média de:
  ${(aluno.fNote + aluno.sNote) / 2}`
}

for (let aluno of alunos) {
  let mediaMessage = mediaNotes(aluno)
  alert(mediaMessage)
}