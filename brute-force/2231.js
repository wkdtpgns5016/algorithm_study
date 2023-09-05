// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = "3";
const n = parseInt(input);

function add_num(num) {
    let sum = 0;
    while (num != 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

let con = 0;
let flag = true;
for (let i = 1; i < n; i++) {
    if (n == i + add_num(i)) {
        console.log(i);
        flag = false;
        break;
    }
}
if (flag)
    console.log(0);