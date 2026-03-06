
const matrix = ( () => {
    let arr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    return arr; }
)();

function createUser (name, marker) {

    function makePlay (num, marker) {
        return function (secondNum) {
            if(matrix[num][secondNum] === '') {
                matrix[num][secondNum] = marker; }
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

const playerOne = createUser('One', 'X');
const playerTwo = createUser('Two', 'O');

function gamePlay () {
    let isTurn = 0;

    const { getWinDeclaration, changeWinDeclaration} = createUser(name, marker);

    function playGame (playOne, playTwo) {
        let playOneDeclaration = playOne.getWinDeclaration();
        let playTwoDeclaration = playTwo.getWinDeclaration();

        while (playOneDeclaration === false && playTwoDeclaration === false) {
            if (isTurn === 0) {
                console.log(`It is Player One's turn. Please make a play.`);
                isTurn = 1;

            }
        }
    }
}

console.log(playerOne);
console.log(playerTwo);

// playerOne.play2(0);
// playerOne.play2(1);
// playerOne.play2(2);
// playerOne.checkWin();


console.table(matrix);

function test () {
    return alert(matrix.some( (row) => (row.includes('') ) ) );
}
