/* dados de entrada do usuário 

1. número desejado
2. item da lista

variáveis 

1. opção digitada 
2. lista de itens

*/
let option
let items = []

while(option != 3) {

  let option = Number(prompt(`
  Olá usuário! Digite o número da opção desejada
  
  1. Cadastrar item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `))

  switch(option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item) 
      break;
    case 2:
      if(items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
  
      break;
    case 3:
      alert("bye bye")
      break;
    default:
      alert("Opção inváida. Tente novamente")
  }
}