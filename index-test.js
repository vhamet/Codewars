import describe from 'riteway';
import { reducer, countLetters, duplicateCount } from './index';

describe('reducer(acc, current)', async assert => {
  assert({
    given: 'empty accumulator',
    should: 'return object with one key of value 1',
    actual: reducer({}, 'a'),
    expected: {'a': 1}
  });
  
  assert({
    given: 'accumulator with existing keys, a new key',
    should: 'return accumulator plus new key of value 1',
    actual: reducer({ 'b': 1, 'c': 2 }, 'a'),
    expected: {'a': 1, 'b': 1, 'c': 2}
  });
  
  assert({
    given: 'accumulator with existing keys, an existing key',
    should: 'return accumulator with parameter key increased by 1',
    actual: reducer({ 'a': 1, 'b': 1 }, 'a'),
    expected: {'a': 2, 'b': 1}
  });
});

describe('countLetters(text)', async assert => {
  assert({
    given: 'empty text',
    should: 'return empty object',
    actual: countLetters(''),
    expected: {}
  });

  assert({
    given: 'text',
    should: 'return object with count of each letter',
    actual: countLetters('aabccc'),
    expected: { 'a': 2, 'b': 1, 'c': 3 }
  });

  assert({
    given: 'case text',
    should: 'perform insensitive case counting',
    actual: countLetters('aAbCcc'),
    expected: { 'a': 2, 'b': 1, 'c': 3 }
  });
});

describe('duplicateCount()', async assert => {
  assert({
    given: 'empty string',
    should: 'return 0',
    actual: duplicateCount(''),
    expected: 0
  });

  assert({
    given: 'abbc',
    should: 'return the correct count of duplicate',
    actual: duplicateCount('abbc'),
    expected: 1
  });

  assert({
    given: 'abcdaBfg',
    should: 'return the correct count of duplicate case insensitive',
    actual: duplicateCount('abcdaBfg'),
    expected: 2
  });
});