// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

// const input = ["13", 
//             "but", 
//             "i", 
//             "wont", 
//             "hesitate", 
//             "no", 
//             "more", 
//             "no", 
//             "more", 
//             "it", 
//             "cannot", 
//             "wait", 
//             "im", 
//             "yours"];

// const n = parseInt(input[0]);
// let arr = [];
// for (let i = 0; i < input.length - 1; i++)
//     arr[i] = input[i + 1];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i].length > arr[j].length) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//         else if (arr[i].length == arr[j].length) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//             else if (arr[i] === arr[j]) {
//                 arr.splice(j, 1);
//                 i--;
//             }
//         }
//     }
// }

// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

const input = [1, 4, 3, 6, 5];
let sort = [];

function merge(left, right, mid, arr) {
    let i = left;
    let j = mid + 1;
    let k = left;

    while (i <= mid && j <= right) {
        if (arr[j] <= arr[j])
            sort[k++] = arr[i++];
        else
            sort[k++] = arr[j++];
    }

    if (i > mid) {
        for (let l = j; l <= right; l++)
            sort[k++] = arr[l];
    }
    else {
        for (let l = i; l <= mid; l++)
            sort[k++] = arr[l];
    }
}

function merge_sort(left, right, arr) {
    let mid;
    if (left < right) {
        mid = Math.floor((left + right) / 2);
        merge_sort(left, mid, arr);
        merge_sort(mid + 1, right, arr);
        merge(left, right, mid, arr);
    }
}

merge_sort(0, input.length - 1, input);
console.log(sort);
