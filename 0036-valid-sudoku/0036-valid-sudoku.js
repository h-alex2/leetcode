/**
 * @param {character[][]} board
 * @return {boolean}
 */

function getBoxNum(row, column) {
    let boxNum = null;

    if (0 <= row && row <= 2) {
        if (0 <= column && column <= 2) {
            boxNum = 0;
        }
        if (3 <= column && column <= 5) {
            boxNum = 1;
        }
        if (6 <= column && column <= 8) {
            boxNum = 2;
        }
    }
    if (3 <= row && row <= 5) {
        if (0 <= column && column <= 2) {
            boxNum = 3;
        }
        if (3 <= column && column <= 5) {
            boxNum = 4;
        }
        if (6 <= column && column <= 8) {
            boxNum = 5;
        }
    }
    if (6 <= row && row <= 8) {
        if (0 <= column && column <= 2) {
            boxNum = 6;
        }
        if (3 <= column && column <= 5) {
            boxNum = 7;
        }
        if (6 <= column && column <= 8) {
            boxNum = 8;
        }
    }

    return boxNum;
}

function hasBoxValue(boxes, row, column, value) {
    let boxNum = getBoxNum(row, column);

    return !!boxes[boxNum][value];
}

var isValidSudoku = function(board) {
    const row = [...new Array(9)].reduce((acc, _, i) => {acc[i] = {}; return acc;}, {});
    const column = [...new Array(9)].reduce((acc, _, i) => {acc[i] = {}; return acc;}, {});
    const boxes = [...new Array(9)].reduce((acc, _, i) => {acc[i] = {}; return acc;}, {});
    let answer = true;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const value = board[i][j];

            if (hasBoxValue(boxes, i, j, value)) {
                answer = false;
                break;
            }

            if (value !== ".") {
                if (row[i][value] || column[j][value]) {
                    answer = false;
                    break;
                }

                row[i][value] = 1;
                column[j][value] = 1;
                boxes[getBoxNum(i, j)][value] = 1;
            }
        }

        if (!answer) return answer;
    }

    return answer;
};