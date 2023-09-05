// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["10 500", "93 181 245 214 315 36 185 138 216 295"];
const arr = input[0].split(' ');
const arr2 = input[1].split(' ');

const card = [];
const n = parseInt(arr[0]);
const jack = parseInt(arr[1]);
for (let i = 0; i< arr2.length; i++) {
    card[i] = parseInt(arr2[i]);
}

let c = jack;
let result = 0;
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k ++) {
            let sum = card[i] + card[j] + card[k];
            let sub = jack - sum;
            if (sub >= 0 && sub < c) {
                c = sub;
                result = sum;
            }
        }
    }
}
console.log(result);