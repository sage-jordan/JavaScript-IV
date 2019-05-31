// function GameObject(objAttr){
//     this.createdAt = objAttr.createdAt;
//     this.name = objAttr.name;
//     this.dimensions = objAttr.dimensions;
// };
// GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`;
// };
// function CharacterStats(stats){
//     GameObject.call(this, stats);
//     this.healthPoints = stats.healthPoints;
// };
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
// };
// function Humanoid(human){
//     CharacterStats.call(this, human);
//     this.team = human.team;
//     this.weapons = human.weapons;
//     this.language = human.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
// };
class GameObject {
    constructor(objAttr){
        this.createdAt = objAttr.createdAt;
        this.name = objAttr.name;
        this.dimensions = objAttr.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`;
    }
}
class CharacterStats extends GameObject{
    constructor(stats){
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
class Humanoid extends CharacterStats {
    constructor(human){
        super(human);
        this.team = human.team;
        this.weapons = human.weapons;
        this.language = human.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
class Villan extends Humanoid {
    constructor(vilAttr){
        super(vilAttr);
    }
    villanAttack(person){
        if(person.healthPoints - 5 > 0){
            var newHealth = person.healthPoints - 5;
            person.healthPoints = newHealth;
            return `${this.name} used his ${this.weapons[0]}!        ${person.name}'s healthpoints: ${person.healthPoints}`;
        }else{
            person.healthPoints = 0;
            return `${this.name} used his ${this.weapons[0]}. ${person.name} died.      ${person.name}'s healthpoints: ${person.healthPoints}`;
        }
        
    }
}
class Hero extends Humanoid {
    constructor(heroAttr){
        super(heroAttr);
    }
    heroAttack(person){
        if(this.healthPoints === 0){
            return `Hero is dead, cannot carryout attack.`;
        }else{
            if(person.healthPoints - 6 > 0){
                var newHealth = person.healthPoints - 6;
                person.healthPoints = newHealth;
                return `${this.name} used ${this.weapons[0]}!       ${person.name}'s healthpoints: ${person.healthPoints}`;
            }else{
                person.healthPoints = 1;
                return `${this.name} used ${this.weapons[0]}. ${person.name} has been spared.       ${person.name}'s healthpoints: ${person.healthPoints}`;
            }
        }
    }
}

    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
    
    const kayne = new Villan({
        createdAt: new Date(),
        dimensions: {
            length: 2,
            width: 2,
            height: 1
        },
        healthPoints: 15,
        name: 'Kayne',
        team: 'League of Legends',
        weapons: [
            'Scythe'
        ],
        language: 'English',
    })

    const luxHero = new Hero ({
        createdAt: new Date(),
        dimensions: {
            length: 2,
            width: 3,
            height: 4
        },
        healthPoints: 15,
        name: 'Lux',
        team: 'LOL',
        weapons: [
            'Light Magic'
        ],
        language: 'English',
    })

    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
console.log(kayne.villanAttack(luxHero));
console.log(luxHero.heroAttack(kayne));
console.log(kayne.villanAttack(luxHero));
console.log(luxHero.heroAttack(kayne));
console.log(kayne.villanAttack(luxHero));
console.log(luxHero.heroAttack(kayne));