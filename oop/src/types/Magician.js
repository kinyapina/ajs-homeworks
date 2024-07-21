import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);

    this.atack = 10;
    this.defence = 40;
  }
}