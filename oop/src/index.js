import './style.css';

import Bowman from './Bowman';
/*
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon'; 
*/
export default class Character {
  constructor(name, type, health, level, atack, defence) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead'];
    this.name = name;
    this.type = [types]
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;

    if (this.name.length > 10 || this.name.length < 2) {
      throw new Error('Количество символов в имени должно быть от 2 до 10');
    }

    if (typeof (this.name) !== 'string') {
      throw new Error('Имя должно содержать только буквы ');
    }
    else {
      this.name = name;
    }

    if (!this.type.includes(types)) {
      throw new Error('Значение необходимо выбрать из списка');
    }
    else {
      this.type = type;
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.level += + 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
    }
    else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

/* 
class Bowman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type);
    this.type = 'Bowman';
    this.attack = 25;//30
    this.defence = 25;//30
  }
} */
const hero1 = new Bowman('Robert1', 'Bowman');

class Swordsman extends Character {
  constructor(name, type, attack, defence) {
    super(name, type);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name, type, attack, defence) {
    super(name, type);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name, type, attack, defence) {
    super(name, type);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
class Zombie extends Character {
  constructor(name, type, attack, defence) {
    super(name, type);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor(name, type, attack, defence) {
    super(name, type);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}