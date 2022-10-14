let lengthOfBoard : number;
let black : string;
let white : string;

lengthOfBoard = 8;
black = "██";
white = "  ";

const createBoard = () => {
    let board : string;
    board = '';
    for (let i = 1; i <= lengthOfBoard; i++) {
        for (let j = 1; j <= lengthOfBoard; j++) {
            if (i % 2 !== 0) {
                j % 2 !== 0 ? board += white : board += black;
            } else {
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
