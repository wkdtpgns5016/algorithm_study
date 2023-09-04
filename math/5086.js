const input = ["8 16", "32 4", "17 5", "0 0"];
let i = 0;

while (input[i] != "0 0") {
    let str = input[i].split(' ');
    let a = parseInt(str[0]);
    let b = parseInt(str[1]);

    if (a % b == 0)
        console.log("multiple");
    else if (b % a == 0)
        console.log("factor");
    else
        console.log("neither");
    i++;
}