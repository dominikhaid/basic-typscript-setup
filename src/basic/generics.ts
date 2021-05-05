const myArray: number[] = [412, 23, 5456];

export class MyDog {
  name: string;
  legs: number;
  constructor(name: string) {
    this.legs = 4;
    this.name = name;
  }
  bark() {
    console.log(`${this.name} says Wuff`);
  }
}

class Container<T extends MyDog, X> {
  public elements: T[];
  public num: X;
  public publicBark = (index: number) => {
    this.elements[index].bark();
  };
}

function arrGen<T>(param: T[]): T {
  return param[0];
}

function id<T>(param: T): T {
  return param;
}

const container: Container<MyDog, number> = new Container<MyDog, number>();
container.elements = [new MyDog('Rex')];
container.num = 4;

console.log(container.publicBark(0));
console.log(container.num);
console.log(id<number>(40));
console.log(id<string>('40'));
console.log(arrGen(myArray));
//console.log(id<number>('40'))// => Error
