import describe from 'riteway';
import { getComplement, DNAStrand } from './index';

describe('getComplement(c)', async assert => {
  assert({
    given: 'A',
    should: 'return T',
    actual: getComplement('A'),
    expected: 'T'
  });
  
  assert({
    given: 'T',
    should: 'return A',
    actual: getComplement('T'),
    expected: 'A'
  });
  
  assert({
    given: 'G',
    should: 'return C',
    actual: getComplement('G'),
    expected: 'C'
  });
  
  assert({
    given: 'C',
    should: 'return G',
    actual: getComplement('C'),
    expected: 'G'
  });
});

describe('DNAStrand(dna)', async assert => {
  const given = 'a strand of DNA';
  const should = 'return the other complementary side';

  assert({
    given: 'empty string',
    should: 'return empty string',
    actual: DNAStrand(''),
    expected: ''
  });
  
  assert({
    given: given,
    should: should,
    actual: DNAStrand('AAAA'),
    expected: 'TTTT'
  });
  
  assert({
    given: given,
    should: should,
    actual: DNAStrand('ATTGC'),
    expected: 'TAACG'
  });
  
  assert({
    given: given,
    should: should,
    actual: DNAStrand('GTAT'),
    expected: 'CATA'
  });
});