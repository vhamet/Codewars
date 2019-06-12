const concatNames = (acc, current, index, arr) => index === 0 ? current 
  : (index === arr.length - 1 ? `${acc} & ${current}` : `${acc}, ${current}`);

const list = (names) => names.map(o => o.name).reduce(concatNames, '');

export { concatNames, list }