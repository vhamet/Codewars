const sortParity = (acc, current) => {
  current % 2 === 0 ? acc.even.push(current) : acc.odd.push(current);
  return acc;
}

const findOutlier = (integers) => {
  const sortedParity = integers.reduce(sortParity, { even: [], odd: []});
  return sortedParity.even.length === 1 ? sortedParity.even.pop() : sortedParity.odd.pop();
}

export { sortParity, findOutlier }