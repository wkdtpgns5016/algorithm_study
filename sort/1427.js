// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

let input = "500613009";

let arr = [];
for (let i = 0; i < input.length; i++) {
    arr[i] = input[i];
}

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        let temp;
        if (arr[i] < arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
let str = "";
for (let i = 0; i < arr.length; i++)
    str += arr[i];

console.log(str);