// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
}
    receiveDamage(damage) {
    this.health -= damage;
    console.log(this.health);
}

}

// Viking
class Viking extends Soldier  {
    constructor(nameToks,healthToks, strengthToks) {
    super(healthToks, strengthToks);
    this.name = nameToks;
} 
receiveDamage(damage) {
    this.health -= damage;
    let isAlive = this.health > 0;
        if(isAlive){
            return(`${this.name} has received ${damage} points of damage`); 
        }else{
             return (`${this.name} has died in act of combat`);
        }
    
}
battleCry() {
    return `Odin Owns You All!`;
}
      
}
const newViking = new Viking
console.log(new Viking);

// Saxon
class Saxon extends Soldier  {
    constructor(health, strength) {
    super(health, strength); 
        
}
receiveDamage(damage) {
    this.health -= damage;
    let isAlive = this.health > 0;
        if(isAlive){ 
            return(`A Saxon has received ${damage} points of damage`);
        }else{
    return (`A Saxon has died in combat`);
}
}
} 
const newSaxon = new Saxon 
console.log(new Saxon);

// War
class War   {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    
}
addViking(viking) {
    this.vikingArmy.push(viking);

}
addSaxon(saxon) {
    this.saxonArmy.push(saxon);

}
vikingAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)] ;
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let receivedDamage = randomSaxon.receiveDamage(randomViking.strength);
    let indexOfSaxon = this.saxonArmy.indexOf(randomSaxon);
     if (randomSaxon.health <= 0) {
      
    this.saxonArmy.splice(indexOfSaxon,1); }
      return receivedDamage
}


saxonAttack(){
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let receivedDamage = randomViking.receiveDamage(randomSaxon.strength);
    let indexOfViking = this.vikingArmy.indexOf(randomViking);
    if (randomViking.health <= 0) { this.vikingArmy.splice(indexOfViking,1); }
    return receivedDamage


}

showStatus(){
    if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`;
      } else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`;
      } else {
        return `Vikings and Saxons are still in the thick of battle.`;
      }

}
}









