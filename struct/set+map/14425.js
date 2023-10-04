// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["5 11",
            "baekjoononlinejudge",
            "startlink",
            "codeplus",
            "sundaycoding",
            "codingsh",
            "baekjoon",
            "codeplus",
            "codeminus",
            "startlink",
            "starlink",
            "sundaycoding",
            "codingsh",
            "codinghs",
            "sondaycoding",
            "startrink",
            "icerink"];

const arr1 = [];
const arr2 = [];
const temp = input[0].split(" ");
const n1 = parseInt(temp[0]);
const n2 = parseInt(temp[1]);

for (let i = 1; i <= n1; i++) {
    arr1.push(input[i]);
}

for (let i = n1 + 1; i <= n1 + n2; i++) {
    arr2.push(input[i]);
}
let set = new Set(arr1);
let count = 0;
arr2.forEach(function(element) {
    if (set.has(element))
        count++;
});
console.log(count);