export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
export const map = fn => mappable => mappable.map(fn);
export const reduce = fn => reducible => reducible.reduce(fn);
export const prod = (x, y) => x * y;
export const toString = o => o.toString();

