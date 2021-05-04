class LionKing {
    constructor(name) {
        this.run = () => {
            console.log(`${this.name} runs fast and roos loudly`);
        };
        this.walk = () => {
            console.log(`${this.name} walks silently`);
        };
        name: this.name;
    }
}
let lionKing = new LionKing('Simba');
lionKing.run();
lionKing.walk();
//# sourceMappingURL=interfaces.js.map