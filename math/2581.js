// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

function calc_num(num) {
    let count = 0;
    for (let i = 0; i < num; i++) {
        if (num % (i + 1) == 0)
            count++;
    }
    if (count == 2)
        return true;
    return false;
}

const input = ["1", "2"];
const m = parseInt(input[0]);
const n = parseInt(input[1]);
let num = [];
let sum = 0;

for (let i = m; i <= n; i++) {
    if (calc_num(i)) {
        num.push(i);
        sum += i;
    }
}

if (num.length == 0)
    console.log(-1);
else {
    console.log(sum);
    console.log(num[0]);
}

