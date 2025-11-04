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

let board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

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
  if (!playerChoices.includes(e.target.id[2]) && !cpuChoices.includes(e.target.id[2])) {
    playerChoices.push(parseInt(e.target.id[2]))
    e.target.textContent = 'X'
    e.target.removeEventListener('click', playerSelect)
    cpuSelect()
    checkWinner()
  }
  console.log('playerChoices: ' + playerChoices)
}

function cpuSelect() {
  let randomIdx = getRandomInt()
  while (playerChoices.includes(randomIdx) || cpuChoices.includes(randomIdx)) {
    randomIdx = getRandomInt()
  }
  if (!winningCombos.includes(playerChoices)) {
    cpuChoices.push(randomIdx)
    console.log(boardEl.children[randomIdx].textContent = 'O')
    console.log('cpuChoices:' + cpuChoices)
  }
}

function getRandomInt() {
  let randomInt = Math.floor(Math.random() * (8 - 0 + 1)) + 0
  return randomInt
}

function checkWinner() {
  let winner = false
  winningCombos.forEach(combo => {
    if (combo.includes(playerChoices)) winner = true
  })
  console.log("winner: " + winner)
}