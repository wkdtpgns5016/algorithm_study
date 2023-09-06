// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = "27";
const n = parseInt(input);
const sucess = n * 1000 + 666;
let count = 0;
for (let i = 0; i <= sucess; i++) {
    let str = i.toString();
    if (str.includes("666"))
        count++;
    if (count == n)
    {
        console.log(str);
        break;
    }
}