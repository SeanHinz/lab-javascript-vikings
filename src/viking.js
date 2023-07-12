// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking  extends Soldier {
    constructor (name, health, strength) {
    super(health, strength) 
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let vikRoll = Math.floor(this.vikingArmy.length * Math.random())
        let saxRoll = Math.floor(this.saxonArmy.length * Math.random())

        let randomVik = this.vikingArmy[vikRoll]
        let randomSax = this.saxonArmy[saxRoll]

       const damageResult = randomSax.receiveDamage(randomVik.strength)
        if (randomSax.health <= 0) {
            this.saxonArmy.splice(saxRoll, 1)
        }

        return damageResult
    }

    saxonAttack() {
        let vikRoll = Math.floor(this.vikingArmy.length * Math.random())
        let saxRoll = Math.floor(this.saxonArmy.length * Math.random())

        let randomVik = this.vikingArmy[vikRoll]
        let randomSax = this.saxonArmy[saxRoll]

       const damageResult = randomVik.receiveDamage(randomSax.strength)
        if (randomVik.health <= 0) {
            this.vikingArmy.splice(vikRoll, 1)
        }

        return damageResult
    }

    showStatus() {
        if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
            return "Vikings have won the war of the century!"
        } if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
            return 'Saxons have fought for their lives and survived another day...'
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
