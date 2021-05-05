export const sym = Symbol('key');
const sym2 = Symbol('key');
const obj = {
  [sym]: () => 'Wert 2',
  [sym2]: 'Wert 2',
};

obj[sym2] = 'Wert';

console.log(obj[sym]());
console.log(obj[sym2]);
