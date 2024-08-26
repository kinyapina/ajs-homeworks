import read from '../js/reader.js';
import json from '../js/parser.js';

class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const savingValue = JSON.parce(value);

      const savingData = new GameSavingLoader(
        savingValue.id,
        savingValue.created,
        savingValue.userInfo
      );

      return saving;
    }
    catch (error) {
      throw new Error('Error:' + error.message)
    }
  }
}