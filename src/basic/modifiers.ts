class Tree {
  public height: number = 5
  protected age: number = 10
  private something: number = 10
  
  use(): void {
    console.log(this.something, this.age)
  } 
}


class Eiche extends Tree {
  height: number = 50
  age2: number  = this.age
}


let newEiche = new Eiche()
console.log(newEiche.height)  
//console.log(newEiche.age)  // => error
console.log(newEiche.age2)  // => ok
//console.log(newEiche.something) // => error 

