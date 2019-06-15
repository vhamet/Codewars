import describe from 'riteway';
import { persistence } from './index';

describe('persistence(n)', async assert => {
  const given = 'a positive integer';
  const should = ' returns its multiplicative persistence';

  assert({
    given,
    should,
    actual: persistence(39),
    expected: 3
  });

  assert({
    given,
    should,
    actual: persistence(4),
    expected: 0
  });

  assert({
    given,
    should,
    actual: persistence(25),
    expected: 2
  });
  
  assert({
    given,
    should,
    actual: persistence(999),
    expected: 4
  });
});
