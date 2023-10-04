// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["3 4",
            "ohhenrie",
            "charlie",
            "baesangwook",
            "obama",
            "baesangwook",
            "ohhenrie",
            "clinton"];

const temp = input[0].split(' ');
const n1 = parseInt(temp[0]);
const n2 = parseInt(temp[1]);

const s1 = new Set();
const s2 = new Set();

for (let i = 1; i <= n1; i++) {
    s1.add(input[i]);
}
for (let i = n1 + 1; i <= n1 + n2; i++) {
    s2.add(input[i]);
}

let arr = [];
let count = 0;

for (const item of s1) {
    if (s2.has(item)) {
        count++;
        arr.push(item);
    }
}

arr.sort();
console.log(count);
console.log(arr.join('\n'));