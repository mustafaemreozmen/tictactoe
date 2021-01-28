const gameTable = document.querySelector('.game-table')
const gameButton = document.querySelector('#game-button')
const winnerSection = document.querySelector('#winner')
const tdArray = document.getElementsByTagName('td')
const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const winConditions = [
  [gameBoard[0], gameBoard[1], gameBoard[2]],
  [gameBoard[3], gameBoard[4], gameBoard[5]],
  [gameBoard[6], gameBoard[7], gameBoard[8]],
  [gameBoard[0], gameBoard[3], gameBoard[6]],
  [gameBoard[1], gameBoard[4], gameBoard[7]],
  [gameBoard[2], gameBoard[5], gameBoard[8]],
  [gameBoard[0], gameBoard[4], gameBoard[8]],
  [gameBoard[2], gameBoard[4], gameBoard[6]]
]

let turn = 'X'
let gameStatus = false
let clicksOf = {
  'X': [],
  'O': []
}

const gameStatusChanger = () => {
  if (gameStatus) {
    gameButton.className = 'not-started';
    gameButton.innerHTML = 'start game';
    resetGame();
  }
  else {
    gameButton.className = 'started';
    gameButton.innerHTML = 'end game';
  }
  gameStatus = !gameStatus;
}

const checkWinner = (clicks) => {
  return winConditions.filter(condition => 
    condition.sort().toString() == clicks.sort().toString()
  ).length;
}

const boardCellClick = function (cell) {
  if (gameStatus && !isNaN(cell.innerText)) {
    clicksOf[turn].push(cell.innerText);
    cell.innerText = turn;
    debugger;
    if (checkWinner(clicksOf[turn])){
      winnerSection.innerHTML = `${turn} wins!`;
      setTimeout(
        () => gameStatusChanger(), 5000
      );
    }
    turn = turn == 'X' ? 'O' : 'X';
  }
}

const resetGame = () => {
  window.location.reload();
}

window.addEventListener('load', (e) => {
  let length = gameBoard.length;
  for (let i = 0; i < length; i++) {
    tdArray[i].innerText = gameBoard[i];
    tdArray[i].onclick = (e) => boardCellClick(tdArray[i]);
  }
});

gameButton.addEventListener('click', (e) => {
  gameStatusChanger();
});