// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["10",
            "6 3 2 10 10 10 -10 -10 7 3",
            "8",
            "10 9 -5 2 3 4 5 -10"];

const arr = input[1].split(' ');
const search = input[3].split(' ');
const map = new Map();

for (let i = 0; i < arr.length; i++) {
    let v = map.get(arr[i]);
    if (v === undefined) {
        map.set(arr[i], 1);
    }
    else {
        map.set(arr[i], v + 1);
    }
}

let str = "";
search.forEach(function(v) {
    if (map.get(v) === undefined)
        str += 0 + " ";
    else
        str += map.get(v) + " ";
});

console.log(str.trim());