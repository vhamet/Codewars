import describe from 'riteway';
import { alphabetPosition } from './index';

describe('alphabetPosition(text)', async assert => {
  assert({
    given: 'empty string',
    should: 'return empty string',
    actual: alphabetPosition(''),
    expected: ''
  });

  assert({
    given: 'a string with case',
    should: 'return a string with every letter replaced with its position in the alphabet.',
    actual: alphabetPosition('abcxyz'),
    expected: '1 2 3 24 25 26'
  });

  assert({
    given: 'a string with uppercase',
    should: 'same value for lowercase and uppercase letter',
    actual: alphabetPosition('aBcXYz'),
    expected: '1 2 3 24 25 26'
  });

  assert({
    given: 'a string with non-letter characters',
    should: 'ignore these non letter-caracters',
    actual: alphabetPosition('ab c!x"yz ?'),
    expected: '1 2 3 24 25 26'
  });

  assert({
    given: 'a string',
    should: 'return expected value',
    actual: alphabetPosition('The sunset sets at twelve o\' clock.'),
    expected: '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
  });

  assert({
    given: 'a string',
    should: 'return expected value',
    actual: alphabetPosition('The narwhal bacons at midnight.'),
    expected: '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
  });
});