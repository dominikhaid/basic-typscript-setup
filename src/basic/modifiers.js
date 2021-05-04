class Tree {
    constructor() {
        this.height = 5;
        this.age = 10;
        this.something = 10;
    }
    use() {
        console.log(this.something, this.age);
    }
}
class Eiche extends Tree {
    constructor() {
        super(...arguments);
        this.height = 50;
        this.age2 = this.age;
    }
}
let newEiche = new Eiche();
console.log(newEiche.height);
//console.log(newEiche.age)  // => error
console.log(newEiche.age2); // => ok
//console.log(newEiche.something) // => error 
//# sourceMappingURL=modifiers.js.map