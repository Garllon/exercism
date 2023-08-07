
export class Robot {
  private characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  public static usedNames: Set<string> = new Set<string>();
  _name: string;

  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private generateName(): string {
    let internalName: string;

    do {
      internalName = this.getRandomChar() + this.getRandomChar() + this.getRandomInt().toString();
    } while (Robot.usedNames.has(internalName));

    Robot.usedNames.add(internalName);
    return internalName;
  }

  private getRandomChar(): string {
    return this.characters.charAt(Math.floor(Math.random() * this.characters.length));
  }

  private getRandomInt(): number {
    return Math.floor(Math.random() * (999 - 100) + 100); // The maximum is exclusive and the minimum is inclusive
  }

}
