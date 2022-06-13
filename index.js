const start = 1;
const end = 10;
let result = 0;

for(let number = start; number <= end; number += 1) {
    if (number % 5 === 0) {
        console.log(number);
    } else if (number % 2 === 0 && number % 4 !== 0) {
        result += number;
    } else if (number % 3 === 0) {
        result -= number;
    } else if (number % 4 === 0) {
    result *= number
}
}