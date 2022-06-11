const getShuffledArray = (num) => {
  let number = num - 1;
  let arr = [];
  for (let index = 0; index < num; index = index + 2) {
    arr[index] = number;
    number = number + 1;
    arr[index + 1] = number;
    number = number - 3;
  }
  return arr;
};

console.log(getShuffledArray(20));

[19, 20, 17, 18, 15, 16, 13, 14, 11, 12, 9, 10, 7, 8, 5, 6, 3, 4, 1, 2];
