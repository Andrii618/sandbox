const filter = (arr, callback) =>
  arr.reduce((acc, current, index) => {
    const result = callback(current);
    return result ? (acc[index] = current) : acc;
  }, []);

console.log(filter([1, 2, 3], (value) => value > 2));
