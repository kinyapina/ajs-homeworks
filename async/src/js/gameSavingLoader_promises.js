import read from './reader.js';
import json from './parser.js';

class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => {
        return json(data);
      })
      .then((jsonData) => {
        const savingData = JSON.parse(jsonData);

        return new GameSaving(
          savingData.id,
          savingData.created,
          savingValue.userInfo
        );
      })

      .catch(error) {
      throw new Error('Error:' + error.message)
    }

  }
}