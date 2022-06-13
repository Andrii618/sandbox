const getSum = (start, end) => {
  let number = start - 1;
  return Array(end - start + 1)
    .fill()
    .map((el) => {
      number += 1;
      return (el = number);
    })
    .filter((el) => el % 2 === 0)
    .reduce((acc, el) => (acc += el));
};

console.log(getSum(10, 12));
