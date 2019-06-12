const alphabetPosition = (text) => text
  .toLowerCase()
  .split('')
  .filter(c => /^[a-zA-Z]+$/.test(c))
  .map(c => c.charCodeAt(0) - 96)
  .join(' ');

export { alphabetPosition }