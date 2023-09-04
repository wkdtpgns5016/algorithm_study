const input = "60466175 36";
const inputarr = input.split(' ');
let base = parseInt(inputarr[1]);
let n = parseInt(inputarr[0]);
console.log(n.toString(base).toUpperCase());

// let arr = [];
// let base_arr = "0123456789ABCDEFGHIJKLNMOPQRSTUVWXYZ";
// let i = 0;
// while (n > 0)
// {
//     arr[i++] = (n % base);
//     n = Math.floor(n / base);
// }
// let str = "";
// for (let i = arr.length - 1; i >= 0; i--)
// {
//     str += base_arr[arr[i] % 36];   
// }
// console.log(str);
