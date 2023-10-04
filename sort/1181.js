// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["13", 
            "but", 
            "i", 
            "wont", 
            "hesitate", 
            "no", 
            "more", 
            "no", 
            "more", 
            "it", 
            "cannot", 
            "wait", 
            "im", 
            "yours"];

const n = parseInt(input[0]);
let arr = [];
for (let i = 0; i < input.length - 1; i++)
    arr[i] = input[i + 1];

arr.sort(function(a, b){
    if (a.length > b.length)
        return 1;
    else if (a.length === b.length) {
        if (a > b)
            return 1;
        else if (a === b)
            return 0;
        else
            return -1;
    }
    else
        return -1;
});
let set = new Set(arr);

set.forEach((str) => console.log(str));