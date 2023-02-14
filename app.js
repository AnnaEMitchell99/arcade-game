let tile = document.getElementById("game-board");

let gameBoard = Array(tile.length)
gameBoard.fill(undefined)

let playerOne = document.getElementById("player-one");
let playerTwo = document.getElementById("player-two");
let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;


function tileSelect(event){
    let gameSquare = event.target;
    let gameSquareNumber = gameSquare.dataset.index;
    if (gameSquare.innerText != ""){

    }
    if (currentPlayer === playerX){
        gameSquare.textContent = playerX;
        gameBoard[gameSquareNumber - 1] = playerX;
        currentPlayer = playerO
    } else {
        gameSquare.textContent = playerO;
        gameBoard[gameSquareNumber - 1] = playerO;
        currentPlayer = playerX
    }
}

tile.addEventListener("click", tileSelect)

function winGame(){
    let buttonOne = document.getElementById("button-one")
    let buttonTwo = document.getElementById("button-two")
    let buttonThree = document.getElementById("button-three")
    if (buttonOne.textContent == buttonTwo.textContent){
        
    }
}


let gameFinishers = [
    gameBoard[1, 2, 3]
]

if (!gameBoard.includes(undefined)){
    let message = document.createElement("p")
    message.textContent= "Game Over"
    document.getElementById("game-over-text").appendChild(message)
    } else if(gameBoard.includes(undefined)){
        let messageTwo = document.createElement("p")
        messageTwo.textContent = "Game Continues"
    document.getElementById("game-over-text").appendChild(messageTwo)
}