import { sort, transpose } from './utils';

const sequence = '123456789';

const toOrderedString = arr => sort(arr).join('');
const lineIsSequence = line => toOrderedString(line) === sequence;

const subMatrixes = array => array.map((l, i) => l.map((n, j) => array[Math.floor(i / 3) * 3 + Math.floor(j / 3)][Math.floor(i * 3) % 9 + Math.floor(j % 3)]))
  
const validSolution = (board) => board.every(lineIsSequence)
  && transpose(board).every(lineIsSequence)
  && subMatrixes(board).every(lineIsSequence);

export { validSolution };
