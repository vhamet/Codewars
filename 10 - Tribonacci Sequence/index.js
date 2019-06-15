const getLast3 = arr => arr.slice(-3);

const sum = (x, y) => x + y;

const calcTribonnacci = (signature, n) =>
  n === 0
    ? signature
    : calcTribonnacci(signature.concat(getLast3(signature).reduce(sum)), n - 1);

const tribonacci = (signature, n) =>
  n < 4 ? signature.slice(0, n) : calcTribonnacci(signature, n - 3);

export { getLast3, sum, tribonacci };
