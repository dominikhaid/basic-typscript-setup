class House {
  zimmer: number
  qm: number
  balkon: boolean

  constructor(zimmer: number, qm: number, balkon: boolean) {
    this.zimmer = zimmer
    this.qm = qm
    this.balkon = balkon
  }
  
  preis(): number {
    const sum = this.zimmer  * this.qm
    return sum
  }
}

var myHouse:House = new House(50,600,true)
console.log(myHouse)
console.log(myHouse.preis())

class Dog  {
  constructor(name: string) {
     this.name =name

 }
  legs: number = 4
  name:string
  bark(): void {
    console.log(`${this.name} says Wuff`)
  }
}

class Breed extends Dog {
 breed:string
  constructor(name:string,breed: string) {
    super(breed)
    this.breed = breed
    this.name = name
  }
 bark():void {
  console.log(`${this.name} says Wuff, he is a ${this.breed}`)
 }
}

class Bully extends Breed {
  legs:number =6
}

let rex = new Breed('Rex','Schäferhund')
rex.bark()
console.log(rex.legs)

let bully = new Bully('MyBullyDog','Bully')
bully.bark()
console.log(bully.legs)

let dogs: Dog[] = [new Dog('Dog1'), new Breed('Dog2','Dackel')]
console.log(dogs.forEach(dog=>dog.bark()))