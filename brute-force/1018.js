// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["11 12",
                "BWWBWWBWWBWW", 
                "BWWBWBBWWBWW", 
                "WBWWBWBBWWBW", 
                "BWWBWBBWWBWW",
                "WBWWBWBBWWBW",
                "BWWBWBBWWBWW",
                "WBWWBWBBWWBW",
                "BWWBWBWWWBWW",
                "WBWWBWBBWWBW",
                "BWWBWBBWWBWW",
                "WBWWBWBBWWBW"];

function count_brush(board, sucess) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        if (board[i] != sucess.at(i))
            count++;
    }
    return count;
}

function check_color(x, y, board, flag) {
    let count = 0;
    let sucess = [];
    if (flag == 1)
        sucess = ["WBWBWBWB", 
                "BWBWBWBW", 
                "WBWBWBWB", 
                "BWBWBWBW",
                "WBWBWBWB",
                "BWBWBWBW",
                "WBWBWBWB",
                "BWBWBWBW"];
    else 
        sucess = ["BWBWBWBW", 
                "WBWBWBWB", 
                "BWBWBWBW",
                "WBWBWBWB",
                "BWBWBWBW",
                "WBWBWBWB",
                "BWBWBWBW",
                "WBWBWBWB" ];
    let j = 0;
    for (let i = y; i < 8 + y; i++) {
        let line = board[i].substring(x, x + 8);
        if (line != sucess[j]) {
            count += count_brush(line, sucess[j]);
        }
        j++;
    }
    return count;
}

const arr = input[0].split(' ');
const n = parseInt(arr[0]);
const m = parseInt(arr[1]);

const w = m - 7;
const h = n - 7;

let result = 64;
for (let j = 1; j < h + 1; j++) {
    for (let i = 0; i < w; i++) {
        let result1 = check_color(i, j, input, 1);
        let result2 = check_color(i, j, input, 0);
        if (result1 <= result2 && result1 < result)
            result = result1;
        else if (result2 <= result1 && result2 < result)
            result = result2;
    }
}
console.log(result);
