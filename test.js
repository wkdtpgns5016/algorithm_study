// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["10", "40", "30", "60", "30"];
let arr = [parseInt(input[0]),
            parseInt(input[1]),
            parseInt(input[2]),
            parseInt(input[3]),
            parseInt(input[4])];

function merge(left, right, arr) {
    let temp = [];
    for (let i = 0; i <= right; i++)
        temp[i] = arr[i];
    
    let mid = Math.floor((left+right)/2);
    let tleft = left;
    let tright = right;
    let current = left;

    while (tleft <= mid && tright <= right) {
        if (temp[tleft] <= temp[tright]) {
            arr[current++] = temp[tleft++];
        }
        else {
            arr[current++] = temp[tright++];
        }
    }

    let remain = mid - tleft;
    for (let i = 0; i<= remain; i++) {
        arr[current + i] = temp[tleft + i];
    }
}

function partition(left, right, arr) {
    if (left < right) {
        let mid = Math.floor((left+right)/2);
        partition(left, mid, arr);
        partition(mid+1, right, arr);
        merge(left, right, arr);
    }
}

partition(0, 4, arr);
console.log(arr[2]);
