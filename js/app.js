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

let board = [0,0,0,0,0,0,0,0,0]
let turn = 1
let winner = false
let tie = false


let msg = 'Wanna play?'
let playerChoices = [], cpuChoices = []

/*------------------------ Cached Element References ------------------------*/

// const boardEl = document.querySelector('.board')
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

messageEl.textContent = msg

/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll("div").forEach(function (square) {
  square.addEventListener("click", handleSelection)
})

/*-------------------------------- Functions --------------------------------*/

function handleSelection(e) {
  let sqIdx = parseInt(e.target.id[2])
  if (board[sqIdx] !== 0 || winner) {
    console.log('bruh')
    return
  } else {

  }
}

function init() {
  console.log('INIT!')
  board = [1,-1,0,0,0,0,0,0,0]
  render()
}

init()

function render() {
  
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach((sqr, idx) => {
    if (sqr === 1) {
      squareEls[idx].textContent = 'X'
    }
    if (sqr === -1) {
      squareEls[idx].textContent = 'O'
    }
  })
}

function updateMessage() {
  if (!winner && !tie) {
    msg = turn === 1 ? "Player X's Turn" : "Player O's Turn"
  } else if (!winner && tie) {
    msg = "It's a tie!"
  } else {
    msg = turn === 1 ? "Congratulations Player X!" : "Congratulations Player O!"
  }
}

// selection helpers
function placePiece(idx) {
  board[idx] = turn
}

function checkForTie() {
  let count = 0
  for (let i = 0; i < board.length; i++) {
    if (board[i] === 0) count++
  }

  tie = count === 0
}

function checkForWinner() {
  winningCombos.forEach(combo => {
    
  })
}


// function playerSelect(e) {
//   if (!playerChoices.includes(e.target.id[2]) && !cpuChoices.includes(e.target.id[2])) {
//     playerChoices.push(parseInt(e.target.id[2]))
//     e.target.textContent = 'X'
//     e.target.removeEventListener('click', playerSelect)
//     cpuSelect()
//     checkWinner()
//   }
//   console.log('playerChoices: ' + playerChoices)
// }

// function cpuSelect() {
//   let randomIdx = getRandomInt()
//   while (playerChoices.includes(randomIdx) || cpuChoices.includes(randomIdx)) {
//     randomIdx = getRandomInt()
//   }
//   if (!winningCombos.includes(playerChoices)) {
//     cpuChoices.push(randomIdx)
//     console.log(squareEls[randomIdx].textContent = 'O')
//     console.log('cpuChoices:' + cpuChoices)
//   }
// }

// function getRandomInt() {
//   let randomInt = Math.floor(Math.random() * (8 - 0 + 1)) + 0
//   return randomInt
// }

// function checkWinner() {
//   let winner = false
//   winningCombos.forEach(combo => {
//     if (combo.includes(playerChoices)){
//       winner = true
//     }  
//   })
//   console.log("winner: " + winner)
//   return winner
// }