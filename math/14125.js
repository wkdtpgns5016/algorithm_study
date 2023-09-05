// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = "1 2 3";
const arr = input.split(' ');
let x = parseInt(arr[0]);
let y = parseInt(arr[1]);
let z = parseInt(arr[2]);

let max = x;
let sum = y + z;
if (max < y) {
    sum = x + z;
    max = y;
}
if (max < z) {
    sum = x + y;
    max = z;
}
if (max < sum)
    console.log(sum + max);
else
    console.log(sum + sum - 1);

