export interface Lion {
  name: string;
  run: () => void;
}

interface SlowLion {
  walk: () => void;
}

class LionKing implements Lion, SlowLion {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  run = (): void => {
    console.log(`${this.name} runs fast and roos loudly`);
  };
  walk = (): void => {
    console.log(`${this.name} walks silently`);
  };
}

const lionKing = new LionKing('Simba');
lionKing.run();
lionKing.walk();
