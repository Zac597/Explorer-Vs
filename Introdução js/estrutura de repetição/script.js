// Estrutura de repetição 
// for

// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 10; i > 0; i--) {
  if(i === 5) {
    continue;
  }

  console.log(i)
}

// while

let i = 0
while(i < 10) {
  console.log(i)

  i++
}

// for...of

let name = 'Isaac'
let names = ['João', 'Maria', 'Pedro']

for(let name of names) {
  console.log(name)
}

// for...in

let person = {
  name: 'Isaac',
  age: 21,
  weight: 63.2
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}