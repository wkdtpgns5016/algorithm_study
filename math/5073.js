// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["7 7 7", "6 5 4", "3 2 5", "6 2 6", "0 0 0"];
function check_tri(x, y, z) {
    let max = x;
    let sum = y + z;
    if (max < y) {
        sum = x + z;
        max = y;
    }
    if (max < z) {
        sum = x + y;
        max = z;
    }
    if (max < sum)
        return true;
    return false;
}
function print_type(x, y, z) {
    if (x == y && x == z)
        console.log("Equilateral");
    else if (x == y && x != z)
        console.log("Isosceles");
    else if (x == z && x != y)
        console.log("Isosceles");
    else if (y == z && y != x)
        console.log("Isosceles");
    else if (x != y && x != z)
        console.log("Scalene");
}
let i = 0;
while (input[i] != "0 0 0") {
    let arr = input[i].split(' ');
    let x = parseInt(arr[0]);
    let y = parseInt(arr[1]);
    let z = parseInt(arr[2]);
    if (check_tri(x, y, z)) {
        print_type(x, y, z);
    }
    else
        console.log("Invalid");
    i++;
}
