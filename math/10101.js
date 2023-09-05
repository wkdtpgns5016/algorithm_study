// nodejs 채점 오류 - cpp 대체
// #include <iostream>
// #include <string>

// int main() 
// {
//     std::string str;
//     std::getline(std::cin, str);
//     int x = std::stoi(str);
//     std::getline(std::cin, str);
//     int y = std::stoi(str);
//     std::getline(std::cin, str);
//     int z = std::stoi(str);

//     int sum = x + y + z;
//     if (sum == 180) {
//         if (x == y && x == z)
//             std::cout << "Equilateral" << "\n";
//         else if (x == y && x != z)
//             std::cout << "Isosceles" << "\n";
//         else if (x == z && x != y)
//             std::cout << "Isosceles" << "\n";
//         else if (y == z && y != x)
//             std::cout << "Isosceles" << "\n";
//         else if (x != y && x != z)
//             std::cout << "Scalene" << "\n";
//     }
//     else {
//         std::cout << "Error" << "\n";
//     }
// }

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["40", "70", "70"];
let x = parseInt(input[0]);
let y = parseInt(input[1]);
let z = parseInt(input[2]);

let sum = x + y + z;
if (sum == 180) {
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
else {
    console.log("Error");
}
