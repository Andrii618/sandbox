const getTotalPrice = arr =>
  arr.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(getTotalPrice([10, 11]));
