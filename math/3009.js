// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["5 5", "5 7", "7 5"];

function get_p(a) {
    let arr = a.split(' ');
    let p = [];
    p[0] = parseInt(arr[0]);
    p[1] = parseInt(arr[1]);
    return p;
}

function not_same(a, b, c) {
    if (a == b)
        return c;
    else if (b == c)
        return a;
    else
        return b;
}

let p1 = get_p(input[0]);
let p2 = get_p(input[1]);
let p3 = get_p(input[2]);
console.log(not_same(p1[0],p2[0],p3[0]) + " " + not_same(p1[1],p2[1],p3[1]));
