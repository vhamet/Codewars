import describe from 'riteway';
import { isVisible, bouncingBall } from './index';

describe('isVisible(h,  bounce,  window)', async assert => {
  assert({
    given: 'h * bounce > window',
    should: 'return true',
    actual: isVisible(10, 0.5, 2),
    expected: true
  });

  assert({
    given: 'h * bounce <= window',
    should: 'return false',
    actual: isVisible(10, 0.5, 5),
    expected: false
  });
});


describe('bouncingBall(h,  bounce,  window)', async assert => {
  const given = 'valid parameters';
  const should = 'return number of times ball passes in front the window';

  assert({
    given: 'an height <= 0',
    should: 'return -1',
    actual: bouncingBall(0, 0.5, 2),
    expected: -1
  });

  assert({
    given: 'a bounce <= 0',
    should: 'return -1',
    actual: bouncingBall(30, 0, 2),
    expected: -1
  });

  assert({
    given: 'a bounce >= 1',
    should: 'return -1',
    actual: bouncingBall(30, 1, 2),
    expected: -1
  });

  assert({
    given: 'a window >= h',
    should: 'return -1',
    actual: bouncingBall(2, 0.66, 2),
    expected: -1
  });

  assert({
    given: given,
    should: should,
    actual: bouncingBall(3.0, 0.66, 1.5),
    expected: 3
  });

  assert({
    given: given,
    should: should,
    actual: bouncingBall(30.0, 0.66, 1.5),
    expected: 15
  });

});