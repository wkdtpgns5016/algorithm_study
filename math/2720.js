const input = ["3", "124", "25", "194"];
const t = parseInt(input[0]);
for (let i = 1; i <= t; i++) {
    let money = parseInt(input[i]);
    let q = Math.floor(money / 25);
    let d = Math.floor((money % 25) / 10);
    let n = Math.floor(((money % 25) % 10) / 5);
    let p = Math.floor((((money % 25) % 10) % 5) / 1);
    console.log(q + " " + d + " " + n + " " + p);
}