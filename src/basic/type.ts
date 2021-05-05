export const msg = 'Hello World!';
console.log(msg);

const num = 1985;
console.log(num);

const bool = true;
console.log(bool);

const any: any = 'Null' + 123;
console.log(any);

const zahl = (z: number): void => {
  console.log(z);
  return;
};

zahl(42);

function zahl2(z: number): boolean {
  return z < 40;
}

zahl2(42);
