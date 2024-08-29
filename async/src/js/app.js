import { GameSavingLoader } from './gameSavingLoader_promises.js';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Saving loading:', saving)
  })
  .catch((error) => {
    console.log('Error:' + error)
  })