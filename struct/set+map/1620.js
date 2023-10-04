// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["26 5",
            "Bulbasaur",
            "Ivysaur",
            "Venusaur",
            "Charmander",
            "Charmeleon",
            "Charizard",
            "Squirtle",
            "Wartortle",
            "Blastoise",
            "Caterpie",
            "Metapod",
            "Butterfree",
            "Weedle",
            "Kakuna",
            "Beedrill",
            "Pidgey",
            "Pidgeotto",
            "Pidgeot",
            "Rattata",
            "Raticate",
            "Spearow",
            "Fearow",
            "Ekans",
            "Arbok",
            "Pikachu",
            "Raichu",
            "25",
            "Raichu",
            "3",
            "Pidgey",
            "Kakuna"];
const temp = input[0].split(' ');
const pn = parseInt(temp[0]);
const en = parseInt(temp[1]);
const map = new Map();
const map2 = new Map();
for (let i = 1; i <= pn; i++) {
    map.set(i, input[i]);
    map2.set(input[i], i);
}

for (let i = pn + 1; i <= pn + en; i++) {
    let n = parseInt(input[i]);
    if (Object.is(n, NaN)) {
        console.log(map2.get(input[i]));
    }
    else {
        console.log(map.get(n));
    }
}