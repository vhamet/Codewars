import describe from 'riteway';
import duplicateCount from './index';


describe('sum()', async assert => {
  const should = 'return the correct count of duplicate';

  assert({
    given: 'no arguments',
    should: 'return 0',
    actual: duplicateCount(),
    expected: 0
  });

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