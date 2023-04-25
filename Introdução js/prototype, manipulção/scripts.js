/*
  Prototype

  *prototype-based language
  *prototype chain
  *__proto__

*/

/* 
  Type conversion (typecasting) vs Type coersion

  *Alteração de um tipo dado para outro tipo

console.log(Number('9') + 5)

*/

// Manipulando strings e números

/*
  Transformar string em número e número em string

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

/* 
  Contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

/* 
  Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

  let number = 21.1232132131231
console.log(number.toFixed(2).replace(".",","))
*/

/* 
    Transforme letras minúsculas em maiúsculas. Faça o contrário disso também   
  let word = "Programar é muito bacana"
  console.log(word.toLowerCase().toUpperCase())
*/

/*
  Separar strings

  let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore.toUpperCase())

*/

/*
  Verificar se o texto contém uma palavra especifica

  let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("Amor"))

*/

/*
  Criando array com construtor

  let myArray = new Array('a', 'b', 'c')
console.log(myArray)

*/


/* 
  Contar elementos de um array

  console.log(["a", {type: "array"}, function() {return "alo"}][2]) 

*/


/*
  Transformar uma cadeia de caracteres em elementos de um array

  let word = "manipulação"
console.log(Array.from(word))
*/

// Manipulando Arrays

let techs = ["html", "Css", "Js"]

// Adicionar um item no fim
techs.push("node.js")
// Adicionar um no no começo
techs.unshift("Sql")
// remover do fim 
techs.pop()
// remover do começo
techs.shift()
// Pegar somente alguns elementos do array
// console.log(techs.slice(0, 3))

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)

// encontrar a posição de um elemento no array
let position = techs.indexOf('Css')

console.log(position)