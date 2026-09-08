
const matrix = ( () => {
    let arr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    return arr; }
)();


function createUser (name, marker) {

    const { changeTurn, getTurn } = gamePlay();

    function makePlay (num, marker) {
        return function (secondNum) {
            if(matrix[num][secondNum] === '') {
                matrix[num][secondNum] = marker;
                changeTurn();
                getTurn(); }
            else alert("You cant do that!");
        }
    };

    let winCount = 0;

    let hasWon = false;

    const getWinCount = () => winCount;
    const increaseWinCount = () => {winCount++};

    const getWinDeclaration = () => hasWon;
    const changeWinDeclaration = () => {hasWon = true};
    const resetWinDeclaration = () => {hasWon = false};

    function checkWin () {
        if ( (matrix[0][0] === marker && matrix[1][1] === marker && matrix[2][2] === marker) || (matrix[0][2] === marker && matrix[1][1] === marker && matrix[2][0] === marker) || (matrix[0][0] === marker && matrix[1][0] === marker && matrix[2][0] === marker) || (matrix[0][1] === marker && matrix[1][1] === marker && matrix[2][1] === marker) || (matrix[0][2] === marker && matrix[1][2] === marker && matrix[2][2] === marker) || (matrix[0][0] === marker && matrix[0][1] === marker && matrix[0][2] === marker) || (matrix[1][0] === marker && matrix[1][1] === marker && matrix[1][2] === marker) || (matrix[2][0] === marker && matrix[2][1] === marker && matrix[2][2] === marker)) {
            increaseWinCount();
            changeWinDeclaration();
        } else if (matrix.some( (row) => (row.includes('') ) )  === false ) {
            alert("Its a tie!");
            changeWinDeclaration();
        }
    }

    const play0 = makePlay(0, marker);
    const play1 = makePlay(1, marker);
    const play2 = makePlay(2, marker);
    return {name, marker, play0, play1, play2, checkWin, getWinCount, increaseWinCount, getWinDeclaration, changeWinDeclaration, resetWinDeclaration};
};

const playerOnee = createUser('One', 'X');
const playerTwoo = createUser('Two', 'O');

function gamePlay (playerOne, playerTwo) {

    let isTurn = 0;

    function getTurn( playerOne, playerTwo) {
        if (isTurn = 0) {
            return playerOne;
        } else {
            return playerTwo;
        };
    };

    const getFirstPlayer = () => playerOne.marker;

    const getSecondPlayer = () => playerTwo.marker;

    function makePlay (num, playerOne) {
        return function (secondNum) {
            if(matrix[num][secondNum] === '') {
                matrix[num][secondNum] = playerOne.marker;
                // changeTurn();
                /*getTurn();*/ }
            else alert("You cant do that!");
        }
    };

    const play0 = makePlay(0, playerOne);
    const play1 = makePlay(1, playerOne);
    const play2 = makePlay(2, playerOne);
  

    return {getFirstPlayer, getSecondPlayer, play0, play1, play2};
};

// console.log(playerOne);
// console.log(playerTwo);


// playerOne.play2(0);
// playerOne.play2(1);
// playerOne.play2(2);
// playerOne.checkWin();

// console.table(matrix);

const active = gamePlay(playerOnee, playerTwoo);

alert(active.getFirstPlayer());
alert(active.getSecondPlayer());

active.play0(2, playerOnee);


function test () {
    return alert(matrix.some( (row) => (row.includes('') ) ) );
}

