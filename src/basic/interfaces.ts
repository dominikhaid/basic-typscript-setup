interface Lion {
 name:string
  run: () => void
}

interface SlowLion {
  walk: () => void
}

class LionKing implements Lion, SlowLion {
  constructor(name: string) {
    name : this.name
  }
  name: string
  run = (): void => {
    console.log(`${this.name} runs fast and roos loudly`)
  }
  walk = (): void => {
    console.log(`${this.name} walks silently`)
  }
}

let lionKing = new LionKing('Simba')
lionKing.run()
lionKing.walk()