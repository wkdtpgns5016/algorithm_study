// 출력초과 이슈 cpp로 대체함
// cpp 코드 
// #include <iostream>
// #include <string>
// #include <vector>

// int main() 
// {
//     int j = 0;
//     std::string av;
//     while (std::getline(std::cin, av)) 
//     {
//         if (av == "-1")
//             break;
//         int n = std::stoi(av);
//         std::vector<int> num;
//         int sum = 0;
//         std::string str = "";
//         for (int i = 0; i < n; i++) {
//             if (n % (i + 1) == 0) {
//                 num.push_back(i + 1);
//                 sum += i + 1;
//             }
//         }

//         if (sum / 2 == n) {
//             str += std::to_string(n) + " = ";
//             for (int i = 0; i < num.size() - 1; i++) {
//                 str += std::to_string(num[i]);
//                 if (i != num.size() - 2)
//                     str += " + ";
//             }
//         }
//         else
//             str += std::to_string(n) + " is NOT perfect.";
//         std::cout << str << "\n";
//         j++;
//     }
// }

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const input = ["2", "12", "28", "-1"];

let j = 0;
while (parseInt(input[j]) != -1)
{
    let n = parseInt(input[j]);
    let num = [];
    let sum = 0;
    let str = "";
    for (let i = 0; i < n; i++) {
        if (n % (i + 1) == 0) {
            num.push(i + 1);
            sum += i + 1;
        }
    }

    if (sum / 2 == n) {
        str += n + " = ";
        for (let i = 0; i < num.length - 1; i++) {
            str += num[i];
            if (i != num.length - 2)
                str += " + ";
        }
    }
    else
        str += n + " is NOT perfect.";
    console.log(str);
    j++;
}
