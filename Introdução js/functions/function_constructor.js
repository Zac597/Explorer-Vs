/* 
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
      return this.name + " está andando"
    }
}

const isaac = new Person("Isaac")
const joao = new Person("João")
console.log(isaac.walk())
console.log(joao.walk())