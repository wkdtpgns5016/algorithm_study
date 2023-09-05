// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["2", "10000 -10000", "-10000, 10000"];
const n = parseInt(input[0]);

let minx = 100001;
let maxx = -100001;
let miny = 100001;
let maxy = -100001;
for (let i = 1; i <= n; i++) {
    let arr = input[i].split(' ');
    let x = parseInt(arr[0]);
    let y = parseInt(arr[1]);
    if (minx > x)
        minx = x;
    if (miny > y)
        miny = y;
    if (maxx < x)
        maxx = x;
    if (maxy < y)
        maxy = y;
}

console.log((maxx - minx)*(maxy-miny));