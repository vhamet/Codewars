const getCount = (str) => str.split('').filter(c => (/^[aeiou]$/i).test(c)).length;

export { getCount }