const reducer = (acc, current) => {
  acc[current] ? acc[current]++ : (acc[current] = 1);
  return acc;
}

export default function duplicateCount(text = ''){
  const count = text
    .toLowerCase()
    .split('')
    .reduce(reducer, {});
    
    return Object.values(count).filter(v => v > 1).length
}