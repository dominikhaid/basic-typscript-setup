export class Tree {
  constructor(height: number, age: number, something: number) {
    this.age = age;
    this.height = height;
    this.something = something;
  }
  public height = 5;
  protected age = 10;
  private something = 10;

  use(): void {
    console.log(this.something, this.age);
  }
}

class Eiche extends Tree {
  height = 50;
  age2: number = this.age;
}

const newEiche = new Eiche();
console.log(newEiche.height);
//console.log(newEiche.age)  // => error
console.log(newEiche.age2); // => ok
//console.log(newEiche.something) // => error
