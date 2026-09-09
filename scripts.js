
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

    const isTurnTest = () => isTurn;

    function getTurn(playerOne, playerTwo) {
        if (isTurn === 0) {
            return playerOne;
        } else {
            return playerTwo;
        };
    };

    function changeTurn () {
        console.log(isTurn);
        if (isTurn === 0) {
             isTurn = 1;
        } else {
            isTurn = 0;
        };
    };

    // let player = getTurn(playerOne, playerTwo);

    const getFirstPlayer = () => playerOne.marker;

    const getSecondPlayer = () => playerTwo.marker;

    function makePlay (num, player) {
        return function (secondNum) {
            // player = getTurn(playerOne, playerTwo);
            if(matrix[num][secondNum] === '') {
                matrix[num][secondNum] = player.marker;
                changeTurn();
                checkWin(player, player.marker);
                /*getTurn();*/ }
            else alert("You cant do that!");
        }
    };

    const play0 = makePlay(0);
    const play1 = makePlay(1);
    const play2 = makePlay(2);

        function checkWin (player, marker) {
        if ( (matrix[0][0] === marker && matrix[1][1] === marker && matrix[2][2] === marker) || (matrix[0][2] === marker && matrix[1][1] === marker && matrix[2][0] === marker) || (matrix[0][0] === marker && matrix[1][0] === marker && matrix[2][0] === marker) || (matrix[0][1] === marker && matrix[1][1] === marker && matrix[2][1] === marker) || (matrix[0][2] === marker && matrix[1][2] === marker && matrix[2][2] === marker) || (matrix[0][0] === marker && matrix[0][1] === marker && matrix[0][2] === marker) || (matrix[1][0] === marker && matrix[1][1] === marker && matrix[1][2] === marker) || (matrix[2][0] === marker && matrix[2][1] === marker && matrix[2][2] === marker)) {
                alert(`${player} has won!`);
        } else if (matrix.some( (row) => (row.includes('') ) )  === false ) {
            alert("Its a tie!");
        }
    }

  

    return {getFirstPlayer, getSecondPlayer, play0, play1, play2, getTurn, changeTurn, isTurnTest, isTurn, /*player,*/ checkWin};
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

// active.play0(1);
// active.play0(0);

function test () {
    return alert(matrix.some( (row) => (row.includes('') ) ) );
}

