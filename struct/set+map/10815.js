// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["5", 
            "6 3 2 10 -10", 
            "8", 
            "10 9 -5 2 3 4 5 -10"];

const arr1 = input[1].split(' ');
const arr2 = input[3].split(' ');
let str = "";
let have = [];
let card = [];

for (let i = 0; i < arr1.length; i++)
    have.push(parseInt(arr1[i]));
for (let i = 0; i < arr2.length; i++) 
    card.push(parseInt(arr2[i]));

have.sort((a, b) => a - b);
// 이진탐색
function binary_search(arr, element, low, high) {
    if (low > high)
        return -1;
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === element)
        return mid;
    else if (arr[mid] > element) {
        return binary_search(arr, element, low, mid - 1);
    }
    else {
        return binary_search(arr, element, mid + 1, high);
    }
}
for (let i = 0; i < card.length; i++) {
    if (binary_search(have, card[i], 0, have.length - 1) < 0)
        str += "0 ";
    else
        str += "1 ";
}

console.log(str.trim());
