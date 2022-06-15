const numberOfPairs = (array) => {
  let pairsCount = 0;
  Object.values(
    array.reduce(
      (acc, color) => ({ ...acc, [color]: (acc[color] || 0) + 1 }),
      {}
    )
  ).forEach((element) => {
    if (element % 2 === 0) {
      pairsCount += element / 2;
    }
  });
  return pairsCount;
};
