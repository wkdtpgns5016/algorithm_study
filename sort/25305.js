// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["5 1", "100 76 85 93 98"];
const nk = input[0].split(' ');
const arr = input[1].split(' ');
const n = parseInt(nk[0]);
const k = parseInt(nk[1]);

let grade = [];
for (let i = 0; i < arr.length; i++) {
    grade[i] = parseInt(arr[i]);
}

for (let i = 0; i < grade.length - 1; i++) {
    for (let j = i+1; j < grade.length; j++) {
        let temp;
        if (grade[i] > grade[j])
        {
            temp = grade[i];
            grade[i] = grade[j];
            grade[j] = temp;
        }
    }
}

console.log(grade[n - k]);
