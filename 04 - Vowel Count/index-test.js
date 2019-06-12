import describe from 'riteway';
import { getCount } from './index';

describe('getCount(str)', async assert => {
  assert({
    given: 'empty string',
    should: 'return 0',
    actual: getCount(''),
    expected: 0
  });
  
  assert({
    given: 'a string',
    should: 'Return the number of vowels in the given string',
    actual: getCount('lorem ipsum dolor sit amet'),
    expected: 9
  });
});