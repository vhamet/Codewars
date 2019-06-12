const reducer = (acc, current) => {
  acc[current] ? acc[current]++ : (acc[current] = 1);
  return acc;
}

const countLetters = (text) => text.toLowerCase().split('').reduce(reducer, {});

const duplicateCount = (text) => Object.values(countLetters(text)).filter(v => v > 1).length

export { reducer, countLetters, duplicateCount }