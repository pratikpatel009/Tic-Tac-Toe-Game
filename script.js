var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
var currentPlayer = 'X';

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('cell' + row + col).innerHTML = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkForWinner();
    }
}

function checkForWinner() {
    var winner = null;
    for (var i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            winner = board[i][0];
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            winner = board[0][i];
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        winner = board[0][0];
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        winner = board[0][2];
    }
    if (winner !== null) {
        // console.log('Winner: ' + winner);

        setTimeout(() => {
            alert('Winner: ' + winner)
            resetGame();
        }, 100);
    }
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.getElementById('cell' + i + j).innerHTML = '';
        }
    }
}

document.getElementById('board').addEventListener('click', function(event) {
    var cell = event.target;
    var row = cell.id.charAt(4);
    var col = cell.id.charAt(5);
    makeMove(row, col);
});