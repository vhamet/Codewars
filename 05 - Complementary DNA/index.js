const getComplement = (c) => {
  if (c == 'A') return 'T';
  if (c == 'T') return 'A';
  if (c == 'G') return 'C';
  if (c == 'C') return 'G';
  return '';
};

const DNAStrand = (dna) => Array.prototype.map.call(dna, getComplement).join('');

export { getComplement, DNAStrand }