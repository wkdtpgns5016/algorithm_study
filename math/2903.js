const input = "5";
const n = parseInt(input);
let dp = [];
dp[0] = 4;
dp[1] = 9;
dp[2] = 25;

for (let i = 3; i <= n; i++) {
    let sq = Math.sqrt(dp[i-1]);
    dp[i] = (sq + (2 ** (i-1))) ** 2;
}
console.log(dp[n]);
// DP programming
// dp[0] = 2*2
// dp[1] = 3*3      1
// dp[2] = 5*5      2
// dp[3] = 9*9      4
// dp[4] = 17*17    8
// dp[5] = 33*33    16