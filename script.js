const board = document.getElementById('board')
// console.log(board)
const shadowGameBoard = [null, null, null, null, null, null, null, null, null]
let myPlayerOne = true;
 



function theGame(process) {``
// console.log(theGame)
// how do i know if the move is a X or O
// how do i know space is free
// can not choose a box if character is already in it                                  
const correctBox= process.target;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
]
if(correctBox.innerText.length <1){
    const letter = theCharacters()
    const char = document.createTextNode( letter );
    correctBox.appendChild(char);
    const choosenIndex = parseInt(correctBox.dataset.boxNumber) 
    // console.log(choosenIndex)
    shadowGameBoard.splice(choosenIndex, 1, letter)
}

    for(let i = 0; i < winningCombinations.length; i++) {
        const winningCombo = winningCombinations[i];
        // alert('Winner')

        const firstWinningSquare = winningCombo[0];
        const secondWinningSquare = winningCombo[1];
         const thirdWinningSquare = winningCombo[2];

    //     console.log(winningCombo[0])
        const allSpotsTakenUp= shadowGameBoard.every((spot) => typeof spot === 'string')
         if(shadowGameBoard[firstWinningSquare]!=null && shadowGameBoard[firstWinningSquare]===shadowGameBoard[secondWinningSquare] && shadowGameBoard[secondWinningSquare]===shadowGameBoard[thirdWinningSquare]) {
            alert('winner')
            document.location.reload()
         }
         else if(allSpotsTakenUp) {
             alert('Tie')
             document.location.reload()
        }
         
    }

    // console.log(firstWinningSquare)
    // console.log(secondWinningSquare)
    // console.log(thirdWinningSquare)
    // console.log(winningCombinations[i]);
}
// can not choose a box if the player before you has won game
// console.log(shadowGameBoard)

function theCharacters() {
    if(myPlayerOne) {
        myPlayerOne= false
        return 'X';
    }
    else{
        myPlayerOne=true
        return 'O';
    }
}

board.addEventListener('click', theGame);
// boxes.forEach(element => element.addEventListener('click', theGame));
// make it where im only able to click one box one time 
// get my code to read my shawdowGameBoard
// const champ = document.getElementById('message')


