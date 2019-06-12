import describe from 'riteway';
import { isTriangle } from './index';

describe('isTriangle(a, b, c)', async assert => {
  assert({
    given: '3 sides allowing to build a triangle',
    should: 'return true',
    actual: isTriangle(1, 2, 2),
    expected: true
  });
  
  assert({
    given: '3 sides not allowing to build a triangle',
    should: 'return true',
    actual: isTriangle(1, 1, 2),
    expected: false
  });
  
  assert({
    given: '3 sides not allowing to build a triangle',
    should: 'return true',
    actual: isTriangle(2, 2, 7),
    expected: false
  });
});
