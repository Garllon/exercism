interface AbilityScore {
    [key: number]: number;
}

const ABILITY_MAPPING: AbilityScore = {
    3: -4,
    4: -3,
    5: -3,
    6: -2,
    7: -2,
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: 1,
    13: 1,
    14: 2,
    15: 2,
    16: 3,
    17: 3,
    18: 4
}

export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }

  public static generateAbilityScore(): number {
    let dicesThrows = [];

    for (let i = 0; i < 3; i++) {
        dicesThrows.push(this.throwDice());
    }
    return dicesThrows.sort((a, b) => a - b).slice(1,4).reduce((n, sum) => sum + n);
  }

  public static getModifierFor(abilityValue: number): number {
    return ABILITY_MAPPING[abilityValue];
  }

  private static throwDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
