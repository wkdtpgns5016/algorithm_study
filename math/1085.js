// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = "161 181 762 375";

const arr = input.split(" ");
const x = parseInt(arr[0]);
const y = parseInt(arr[1]);
const w = parseInt(arr[2]);
const h = parseInt(arr[3]);

let distance = [x, y, w-x, h-y];
let min = 1000;
for (let i = 0; i < distance.length; i++) {
    if (distance[i] < min)
        min = distance[i];
}

console.log(min);