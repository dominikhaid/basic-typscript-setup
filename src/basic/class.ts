export class House {
  zimmer: number;
  qm: number;
  balkon: boolean;

  constructor(zimmer: number, qm: number, balkon: boolean) {
    this.zimmer = zimmer;
    this.qm = qm;
    this.balkon = balkon;
  }

  preis(): number {
    const sum = this.zimmer * this.qm;
    return sum;
  }
}

const myHouse: House = new House(50, 600, true);
console.log(myHouse);
console.log(myHouse.preis());

export class Dog {
  constructor(name: string) {
    this.name = name;
    this.legs = 4;
  }
  legs: number;
  name: string;
  bark(): void {
    console.log(`${this.name} says Wuff`);
  }
}

export class Breed extends Dog {
  breed: string;
  constructor(name: string, breed: string) {
    super(breed);
    this.breed = breed;
    this.name = name;
  }
  bark(): void {
    console.log(`${this.name} says Wuff, he is a ${this.breed}`);
  }
}

export class Bully extends Breed {
  legs = 6;
}

const rex = new Breed('Rex', 'Schäferhund');
rex.bark();
console.log(rex.legs);

const bully = new Bully('MyBullyDog', 'Bully');
bully.bark();
console.log(bully.legs);

const dogs: Dog[] = [new Dog('Dog1'), new Breed('Dog2', 'Dackel')];
console.log(dogs.forEach(dog => dog.bark()));
