class House {
  constructor(zimmer, qm, balkon) {
    this.zimmer = zimmer;
    this.qm = qm;
    this.balkon = balkon;
  }
  preis() {
    const sum = this.zimmer * this.qm;
    return sum;
  }
}
let myHouse = new House(50, 600, true);
console.log(myHouse);
console.log(myHouse.preis());
class Dog {
  constructor(name) {
    this.legs = 4;
    this.name = name;
  }
  bark() {
    console.log(`${this.name} says Wuff`);
  }
}
class Breed extends Dog {
  constructor(name, breed) {
    super(breed);
    this.breed = breed;
    this.name = name;
  }
  bark() {
    console.log(`${this.name} says Wuff, he is a ${this.breed}`);
  }
}
class Bully extends Breed {
  constructor() {
    super(...arguments);
    this.legs = 6;
  }
}
let rex = new Breed('Rex', 'Schäferhund');
rex.bark();
console.log(rex.legs);
let bully = new Bully('MyBullyDog', 'Bully');
bully.bark();
console.log(bully.legs);
let dogs = [new Dog('Dog1'), new Breed('Dog2', 'Dackel')];
console.log(dogs.forEach(dog => dog.bark()));
//# sourceMappingURL=class.js.map
