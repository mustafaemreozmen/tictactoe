const gameTable = document.querySelector('.game-table');
const gameButton = document.querySelector('#game-button');
const tdArray = document.getElementsByTagName('td');
const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const winConditions = [
    [gameBoard[0], gameBoard[1], gameBoard[2]],
    [gameBoard[3], gameBoard[4], gameBoard[5]],
    [gameBoard[6], gameBoard[7], gameBoard[8]],
    [gameBoard[0], gameBoard[3], gameBoard[6]],
    [gameBoard[1], gameBoard[4], gameBoard[7]],
    [gameBoard[2], gameBoard[5], gameBoard[8]],
    [gameBoard[0], gameBoard[4], gameBoard[8]],
    [gameBoard[2], gameBoard[4], gameBoard[6]]
];
let gameStatus = false;
let turn = 'X';

window.addEventListener('load', (e) => {
    let length = gameBoard.length;
    for (let i = 0; i < length; i++) {
        tdArray[i].innerText = gameBoard[i];
        tdArray[i].onclick = (e) => boardCellClick(tdArray[i]);
    }

    // const { rows } = gameTable;
    // for(let row of rows){
    //     for(let cell of row.cells){
    //         cell.innerText = '';
    //         
    //     }
    // }
})

const gameStatusChanger = () => {
    if(gameStatus){
        gameButton.className = 'not-started';
        gameButton.innerHTML = 'start game';
        resetGame();
    }
    else{
        gameButton.className = 'started';
        gameButton.innerHTML = 'end game';
    }
    gameStatus = !gameStatus;
}

const checkWinner = () => {
    //TO-DO
}

const boardCellClick = function(cell) {
    if(gameStatus && !isNaN(cell.innerText)){
        cell.innerText = turn;
        turn = turn == 'X' ? 'O' : 'X';
    }
}

gameButton.addEventListener('click', (e) => { 
    gameStatusChanger();
});

const resetGame = () => {
    window.location.reload();
}