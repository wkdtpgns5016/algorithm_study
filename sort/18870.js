// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["5", "2 4 -10 4 -9"];
const n = parseInt(input[0]);
const str_arr = input[1].split(" ");
const arr = [];
let sort_arr = [];
let str = "";

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

for (let i = 0; i < n; i++) {
    let num = parseInt(str_arr[i]);
    arr.push(num);
    sort_arr.push(num);
}

sort_arr.sort((a, b) => a - b);
let set = new Set(sort_arr);
sort_arr = Array.from(set);

for (let i = 0; i < arr.length; i++) {
    str += binary_search(sort_arr, arr[i], 0, sort_arr.length - 1) + " ";
}

console.log(str.trim());

