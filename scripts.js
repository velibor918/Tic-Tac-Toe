
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
            alert(matrix[num][secondNum] === '');
            matrix[num][secondNum] = marker;
        }
    };

    const play0 = makePlay(0, marker);
    const play1 = makePlay(1, marker);
    const play2 = makePlay(2, marker);
    return {name, marker, play0, play1, play2};
};

const playerOne = createUser('One', 'X');
const playerTwo = createUser('Two', 'O');

console.log(playerOne);
console.log(playerTwo);

playerOne.play0(2);
playerOne.play0(2);

console.table(matrix);