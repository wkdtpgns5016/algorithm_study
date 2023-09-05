// a[1] = 0;
// a[2]   a[1]   +  1    
// a[3]   a[2]   +  3    
// a[4]   a[3]   +  6
// a[5]   a[4]   +  10
// a[6]   a[5]   +  15
// a[7]   a[6]   +  21
// a[8]   a[7]   +  28
//        ...
// a[n]   a[n-1] +  n(n-1)/2
// a[n] = a[1]   +  sig{ n(n-1)/2 }

// cpp 대체
// #include <iostream>
// #include <string>

// int main() 
// {
//     std::string str;
//     std::getline(std::cin, str);
//     long n = std::stol(str);
//     std::cout << (n * (n - 1) * (n - 2)) / 6 << "\n";
//     std::cout << "3" << "\n";

// }

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = "3";
const n = parseInt(input);
const sum = (n * (n - 1) * (n - 2)) / 6;
console.log(sum);
console.log(3);