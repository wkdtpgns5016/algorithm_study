// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = "2 5 8 3 -4 -11";
const arr = input.split(' ');

let a = parseInt(arr[0]);
let b = parseInt(arr[1]);
let c = parseInt(arr[2]);
let d = parseInt(arr[3]);
let e = parseInt(arr[4]);
let f = parseInt(arr[5]);

for (let x = -999; x <= 999; x++) {
    let y = ((c-f) - (a-d) * x) / (b-e);
    if (y % 1 == 0 && y >= -999 && y <= 999) {
        if (a*x + b*y == c && d*x + e*y == f) {
            console.log(x + " " + y);
            break;
        }
    }
}
