function getSpecialNumbers(from, to) {
  return Array.from(
    { length: to - from + 1 },
    (value, index) => index + from
  ).filter((el) => el % 3 === 0);
}

// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
