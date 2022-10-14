var lengthOfBoard;
var black;
var white;
lengthOfBoard = 8;
black = "██";
white = "  ";
var createBoard = function () {
    var board;
    board = '';
    for (var i = 1; i <= lengthOfBoard; i++) {
        for (var j = 1; j <= lengthOfBoard; j++) {
            if (i % 2 !== 0) {
                j % 2 !== 0 ? board += white : board += black;
            }
            else {
                j % 2 !== 0 ? board += black : board += white;
            }
            if (j === 8) {
                board += '\n';
            }
        }
    }
    return board;
};
console.log(createBoard());
