export class Wave {
  size = 50;
  static element = 'Water';
}

const bigWave = new Wave();
console.log(bigWave, Wave.element);
