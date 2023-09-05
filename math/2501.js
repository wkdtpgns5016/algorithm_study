const input = "10000 4";
const arr = input.split(' ');
const n = parseInt(arr[0]);
const k = parseInt(arr[1]);
let num = [];
for (let i = 0; i < n; i++) {
    if (n % (i + 1) == 0)
        num.push(i + 1);
}
if (num[k - 1] == undefined)
    console.log(0);
else
    console.log(num[k - 1]);