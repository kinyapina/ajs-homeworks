import './style.css';

class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;

    Object.defineProperty(this, 'health', {
      get: function () {
        return 100;
      }
    })

    Object.defineProperty(this, 'level', {
      get: function () {
        return 1;
      }
    })

    Object.defineProperty(this, 'name', {
      set: function (name) {
        if (!typeof (name) === string) {
          throw new Error('name is not a string');
        }

        if (name.length > 10 || name.length < 2) {
          throw new Error('name length is not correct');
        }
      },
      get: function () {
        return name;
      }
    })

    Object.defineProperty(this, 'type', {
      set: function (type) {
        if (!typeof (type) === string) {
          throw new Error('type is not a string');
        }

        if (type !== 'Bowman' || type !== 'Swordsman' || type !== 'Magician' || type !== 'Daemon' || type !== 'Undead' || type !== 'Zombie') {
          throw new Error('select the type from the list');
        }
      },
      get: function () {
        return type;
      }
    })
  }

  levelUp() {
    if (this.health > 0) {
      this.level += this.level;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
    }
    else {
      throw new Error('you cannot increase the level of undead character');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

class Bowman extends Character {

}

Bowman.attack = 25;
Bowman.defence = 25;

const hero = new Bowman('111', 'Bowman');

console.log(hero);

/* 
class Swordsman extends Character {
  constructor() {
    super();
  }
}

Swordsman.attack = 40;
Swordsman.defence = 10;

class Magician extends Character {
  constructor() {
    super();
  }
}

Magician.attack = 10;
Magician.defence = 40;

class Undead extends Character {
  constructor() {
    super();
  }
}

Undead.attack = 25;
Undead.defence = 25;

class Zombie extends Character {
  constructor() {
    super();
  }
}

Zombie.attack = 40;
Zombie.defence = 10;

class Daemon extends Character {
  constructor() {
    super();
  }
}

Daemon.attack = 10;
Daemon.defence = 40; 
*/