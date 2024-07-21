import Character from './index.js';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.atack = 25;
    this.defence = 25;
  }
}