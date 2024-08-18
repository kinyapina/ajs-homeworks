class Character {
  constructor(name) {
    this.name = name;
  }
}

class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    }
    else {
      throw new Error(`Участник ${character} уже существует в списке команды`)
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

module.exports = { Team, Character };

