import { pipe, map, reduce, prod, toString } from './utils'

const allNumbers = map(Number);
const prodTotal = reduce(prod);

const prodDigits = pipe(
  toString,
  Array.from,
  allNumbers,
  prodTotal,
);

const calcPersistence = (n, acc) => n < 10 ? acc : calcPersistence(prodDigits(n) , acc + 1)

const persistence = (num) => num < 10 ? 0 : calcPersistence(num, 0) ;

export { persistence };
