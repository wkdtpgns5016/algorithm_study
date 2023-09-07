// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["9", "3", "2", "5", "8"];
let arr = [parseInt(input[0]),
            parseInt(input[1]),
            parseInt(input[2]),
            parseInt(input[3]),
            parseInt(input[4])];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length; j++) {
        let temp;
        if (arr[i] > arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log((arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) / 5)
console.log(arr[2]);
