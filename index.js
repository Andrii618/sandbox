export const createCalculator = () => {
  let memory = 0;

  function add(number) {
    memory += number;
  }

  function decrease(number) {
    memory -= number;
  }

  function reset() {
    memory = 0;
  }

  function getMemo() {
    return memory;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
