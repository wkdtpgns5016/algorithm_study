// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["4",
            "Baha enter",
            "Askar enter",
            "Baha leave",
            "Artem enter"];

const n = parseInt(input[0]);
const map = new Map();
for (let i = 1; i <= n; i++) {
    let arr = input[i].split(' ');
    map.set(arr[0], arr[1]);
}

const arr = [];
map.forEach(function(v, k) {
    if (v === "enter")
        arr.push(k);
});

arr.sort().reverse();
console.log(arr.join('\n'));