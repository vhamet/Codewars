export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
export const map = fn => mappable => mappable.map(fn);
export const reduce = fn => reducible => reducible.reduce(fn);
export const sort = arr => [...arr].sort();
export const flatten = matrix => matrix.reduce((prev, l) => prev.concat(l));
export const transpose = matrix => matrix[0].map((x,i) => matrix.map(y => y[i]));
export const prod = (x, y) => x * y;
export const toString = o => o.toString();

