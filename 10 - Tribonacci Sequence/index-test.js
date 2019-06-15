import describe from 'riteway';
import { getLast3, sum, tribonacci } from './index';

describe('getLast3(arr)', async assert => {
  const given = 'an array of at least 3 items';
  const should = 'return the last 3 items';

  assert({
    given,
    should,
    actual: getLast3([0, 1, 2]),
    expected: [0, 1, 2]
  });

  assert({
    given,
    should,
    actual: getLast3([1, 8, 65, 147, 621, 65, 2, 0]),
    expected: [65, 2, 0]
  });
});

describe('sum(arr)', async assert => {
  const given = 'two numbers';
  const should = 'return the sum';

  assert({
    given,
    should,
    actual: sum(1, 2),
    expected: 3
  });

  assert({
    given,
    should,
    actual: sum(3, -4),
    expected: -1
  });
});

describe('tribonacci(signature, n)', async assert => {
  const given = 'a signature array of 3 elements and an integer n >= 0';
  const should =
    'return the first n elements - signature included of the so seeded sequence';

  assert({
    given: 'n === 0',
    should: 'return empty array',
    actual: tribonacci([1, 1, 1], 0),
    expected: []
  });

  assert({
    given,
    should,
    actual: tribonacci([1, 1, 1], 10),
    expected: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
  });
  assert({
    given,
    should,
    actual: tribonacci([0, 0, 1], 10),
    expected: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
  });
  assert({
    given,
    should,
    actual: tribonacci([0, 1, 1], 10),
    expected: [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]
  });
  assert({
    given,
    should,
    actual: tribonacci([1, 0, 0], 10),
    expected: [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]
  });
  assert({
    given,
    should,
    actual: tribonacci([0, 0, 0], 10),
    expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  });
  assert({
    given,
    should,
    actual: tribonacci([1, 2, 3], 10),
    expected: [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]
  });
  assert({
    given,
    should,
    actual: tribonacci([3, 2, 1], 10),
    expected: [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]
  });
  assert({
    given,
    should,
    actual: tribonacci([1, 1, 1], 1),
    expected: [1]
  });
  assert({
    given,
    should,
    actual: tribonacci([300, 200, 100], 0),
    expected: []
  });
  assert({
    given,
    should,
    actual: tribonacci([0.5, 0.5, 0.5], 30),
    expected: [
      0.5,
      0.5,
      0.5,
      1.5,
      2.5,
      4.5,
      8.5,
      15.5,
      28.5,
      52.5,
      96.5,
      177.5,
      326.5,
      600.5,
      1104.5,
      2031.5,
      3736.5,
      6872.5,
      12640.5,
      23249.5,
      42762.5,
      78652.5,
      144664.5,
      266079.5,
      489396.5,
      900140.5,
      1655616.5,
      3045153.5,
      5600910.5,
      10301680.5
    ]
  });
});
