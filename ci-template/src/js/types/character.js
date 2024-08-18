export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Количество символов в имени должно быть от 2 до 10');
    }

    if (typeof (name) !== 'string') {
      throw new Error('Имя должно содержать только буквы');
    }

    if (!types.includes(type)) {
      throw new Error('Значение необходимо выбрать из списка');
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