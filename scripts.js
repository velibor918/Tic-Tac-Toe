
const matrix = ( () => {
    let arr = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    return arr; }
)();

console.table(matrix);

matrix[0][2] = "xD";

console.table(matrix);

function createUser (name, marker) {
    return {name, marker}
};