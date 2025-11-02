/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]

/*---------------------------- Variables (state) ----------------------------*/

let msg = 'Wanna play?'
let playerChoices = [], cpuChoices = []

/*------------------------ Cached Element References ------------------------*/

const boardEl = document.querySelector('.board')
const messageEl = document.querySelector('#message')

messageEl.textContent = msg

/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll("div").forEach(function (square) {
  square.addEventListener("click", playerSelect)
})

/*-------------------------------- Functions --------------------------------*/

function playerSelect(e) {
  if (!playerChoices.includes(e.target.id[2])) {
    playerChoices.push(parseInt(e.target.id[2]))
    e.target.textContent = 'X'
    e.target.removeEventListener('click', playerSelect)
    cpuSelect()
  }
  console.log('playerChoices:' + playerChoices)
}

function cpuSelect() {
  let randomIdx = Math.floor(Math.random() * (8 - 0 + 1)) + 0
  if (!playerChoices.includes(randomIdx)) {
    cpuChoices.push(randomIdx)
    console.log(boardEl.children[randomIdx].textContent = 'O')
  }
  console.log('cpuChoices:' + cpuChoices)
}

