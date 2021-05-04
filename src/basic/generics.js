let numb = 40;
let str = 'String';
let myArray = [412, 23, 5456];
class MyDog {
    constructor(name) {
        this.legs = 4;
        this.name = name;
    }
    bark() {
        console.log(`${this.name} says Wuff`);
    }
}
class Container {
    constructor() {
        this.publicBark = (index) => {
            this.elements[index].bark();
        };
    }
}
function arrGen(param) {
    return param[0];
}
function id(param) {
    return param;
}
let container = new Container();
container.elements = [new MyDog('Rex')];
container.num = 4;
console.log(container.publicBark(0));
console.log(container.num);
console.log(id(40));
console.log(id('40'));
console.log(arrGen(myArray));
//console.log(id<number>('40'))// => Error
//# sourceMappingURL=generics.js.map