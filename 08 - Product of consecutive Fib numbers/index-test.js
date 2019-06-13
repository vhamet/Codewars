import describe from 'riteway';
import { productFib } from './index';

describe('productFib(prod)', async assert => {
  assert({
    given: 'an integer',
    should: 'return expected result',
    actual: productFib(4895),
    expected: [55, 89, true]
  });
  
  assert({
    given: 'an integer',
    should: 'return expected result',
    actual: productFib(5895),
    expected: [89, 144, false]
  });
  
  assert({
    given: 'an integer',
    should: 'return expected result',
    actual: productFib(74049690),
    expected: [6765, 10946, true]
  });
  
  assert({
    given: 'an integer',
    should: 'return expected result',
    actual: productFib(84049690),
    expected: [10946, 17711, false]
  });
});