
let gameBoard = document.getElementById("game-board");

let gameTiles = document.getElementsByClassName("tile");

// let gameBoard = [
//     [undefined, undefined, undefined],
//     [undefined, undefined, undefined],
//     [undefined, undefined, undefined]
// ]

// for (let i = 0; i < gameBoard.length; i++){
//     let currentElement = gameBoard[i]
//     console.log(currentElement)
//     for (let nestedI = 0; nestedI < currentElement.length; nestedI++){
//         let nestedElement = currentElement[nestedI];
//         console.log(nestedElement)
//     }
// }

// let gameEle = document.getElementById("game")

// function boardCellCallback(){
//     console.log(event)
//     console.log(event.target)
// }

// function buildGameBoard(){
//     let gameEle = document.getElementById("game")
//     for (let indexPosition = 0; indexPosition < gameBoard.length; indexPosition++){
//         let newBoardCell = document.createElement("p");
//         newBoardCell.className.add = "cell";
//         newBoardCell.classList.add(indexPosition);
//         newBoardCell.addEventListener("click", boardCellCallback)
//         gameEle.appendChild(newBoardCell);
//     }
// }

// window.addEventListener("DOMContentLoaded", buildGameBoard)