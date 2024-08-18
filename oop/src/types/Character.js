export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Количество букв в имени должно быть от 2 до 10 знаков');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {
      throw new Error(`Значение необходимо выбрать из списка: ${types.join(', ')}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health < 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    else {
      this.level += + 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
    }
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    else {
      throw new Error('Уровень здоровья меньше нормы');
    }
  }
}