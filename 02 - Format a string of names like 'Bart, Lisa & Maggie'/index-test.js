import describe from 'riteway';
import { concatNames, list } from './index';

describe('concatNames(acc, current, index, arr)', async assert => {
  assert({
    given: 'first element',
    should: 'return this element',
    actual: concatNames('', 'Bart', 0, ['Bart', 'Lisa', 'Maggie']),
    expected: 'Bart'
  });

  assert({
    given: 'last element',
    should: 'return accumulator concatenated to this element with ampersand',
    actual: concatNames('Bart, Lisa', 'Maggie', 2, ['Bart', 'Lisa', 'Maggie']),
    expected: 'Bart, Lisa & Maggie'
  });

  assert({
    given: 'any middle element',
    should: 'return accumulator concatenated to this element with comma',
    actual: concatNames('Bart', 'Lisa', 1, ['Bart', 'Lisa', 'Maggie']),
    expected: 'Bart, Lisa'
  });
});

describe('list(names)', async assert => {
  assert({
    given: 'empty list',
    should: 'return empty string',
    actual: list([]),
    expected: ''
  });
  
  assert({
    given: 'list with one name',
    should: 'return the name',
    actual: list([ {name: 'Bart'} ]),
    expected: 'Bart'
  });
  
  assert({
    given: 'list with two names',
    should: 'return two names separated by ampersand',
    actual: list([ {name: 'Bart'}, {name: 'Lisa'} ]),
    expected: 'Bart & Lisa'
  });
  
  assert({
    given: 'list with more than two names',
    should: 'return names separated by commas except for the last two names, which should be separated by an ampersand',
    actual: list([ {name: 'Homer'}, {name: 'Marge'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]),
    expected: 'Homer, Marge, Bart, Lisa & Maggie'
  });
});