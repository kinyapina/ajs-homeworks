export default class Character {
  constructor(name, attack) {
    this.name = name;
    this.baseAttack = attack;
    this.stoned = 0; // уровень "дурмана"
  }

  // Метод для расчета силы атаки с учетом расстояния
  calculateAttack(distance) {
    let attackMultiplier = 1;
    if (distance === 1) {
      attackMultiplier = 1;
    }
    else if (distance === 2) {
      attackMultiplier = 0.9;
    }
    else if (distance === 3) {
      attackMultiplier = 0.8;
    }
    else if (distance === 4) {
      attackMultiplier = 0.7;
    }
    else if (distance === 5) {
      attackMultiplier = 0.6;
    }
    else {
      attackMultiplier = 0; // Если расстояние больше 5, атака не проходит
    }
    // Рассчитываем атаку с учетом "дурмана"
    let attackWithStoned = this.baseAttack * attackMultiplier;
    if (this.stoned > 0) {
      attackWithStoned -= Math.log2(distance) * 5;
      attackWithStoned = Math.max(0, attackWithStoned); // Защита от отрицательной атаки
    }
    return attackWithStoned;
  }

  // Геттер и сеттер для стонов
  get stonedLevel() {
    return this.stoned;
  }

  set stonedLevel(value) {
    this.stoned = value;
  }
}

export default class Magician extends Character {
  constructor(name, attack) {
    super(name, attack);
  }
}

export default class Daemon extends Character {
  constructor(name, attack) {
    super(name, attack);
  }
}
/* 
// Пример использования
const magician = new Magician("Гарри", 100);
const daemon = new Daemon("Демон", 100);

console.log(magician.calculateAttack(2)); // 90
console.log(daemon.calculateAttack(2)); // 90

// Применим "дурман" на маге
magician.stonedLevel = 1;
console.log(magician.calculateAttack(2)); // 85

// Применим "дурман" на демоне
daemon.stonedLevel = 1;
console.log(daemon.calculateAttack(2)); // 85
 */