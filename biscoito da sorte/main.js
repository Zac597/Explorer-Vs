const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
btnReset = document.querySelector("#reset")
coockie = document.querySelector("#coockie")

btnReset = addEventListener('click', resetClick)

function resetClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}