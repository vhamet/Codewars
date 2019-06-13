import describe from 'riteway';
import { sortParity, findOutlier } from './index';

describe('sortParity(acc, current)', async assert => {
  assert({
    given: 'an even number',
    should: 'push it to even property of acc',
    actual: sortParity({ even: [2, 6, 2], odd: [1] }, 4),
    expected: { even: [2, 6, 2, 4], odd: [1] }
  });

  assert({
    given: 'an odd number',
    should: 'push it to odd property of acc',
    actual: sortParity({ even: [2, 6, 2], odd: [1] }, 1),
    expected: { even: [2, 6, 2], odd: [1, 1] }
  });
});

describe('findOutlier(integers)', async assert => {
  const given = 'an array containing integers';
  const should = 'return the outlier (only even/odd number in sequence)';
  
  assert({
    given: given,
    should: should,
    actual: findOutlier([0, 1, 2]),
    expected: 1
  });
  
  assert({
    given: given,
    should: should,
    actual: findOutlier([1, 2, 3]),
    expected: 2
  });
  
  assert({
    given: given,
    should: should,
    actual: findOutlier([2,6,8,10,3]),
    expected: 3
  });
  
  assert({
    given: given,
    should: should,
    actual: findOutlier([0,0,3,0,0]),
    expected: 3
  });
  
  assert({
    given: given,
    should: should,
    actual: findOutlier([1,1,0,1,1]),
    expected: 0
  });
  
  assert({
    given: given,
    should: should,
    actual: findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]),
    expected: 11
  });
  
  assert({
    given: given,
    should: should,
    actual: findOutlier([160, 3, 1719, 19, 11, 13, -21]),
    expected: 160
  });
});
